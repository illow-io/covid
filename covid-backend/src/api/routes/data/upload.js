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

  const promises = Object.values(req.files).map(async (file) => {
    const checksum = Buffer.from(file.md5, 'hex').toString('base64');
    await s3.putObject(file.name, { ContentMD5: checksum }, file.data);
    await users.appendValue(req.currentUser.id, 'dataHashes', file.md5);
  });
  await Promise.all(promises);


  res.json({ message: 'File uploaded!' });
});

export default router;