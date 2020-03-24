import Router from 'express-promise-router';
import fileUpload from 'express-fileupload';
import config from '../../../config';
import { users } from '../../../db/stores';
import s3 from '../../../utils/s3';

const router = Router();
router.use(
  fileUpload({
    debug: config.get('upload.debug'),
    abortOnLimit: true,
    limitHandler: (_req, res) => {
      res.boom.entityTooLarge();
    },
    limits: {
      fileSize: config.get('upload.limits.fileSize')
    }
  })
);

router.post('/', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.boom.badRequest('No files were uploaded.');
  }

  const data = req.files.data;

  await s3.putObject(`${data.md5}.zip`, data.data);
  await users.appendValue(req.currentUser.id, 'dataHashes', data.md5);

  res.json({ message: 'File uploaded!' });
});

export default router;
