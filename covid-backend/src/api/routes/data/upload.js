import Router from 'express-promise-router';
import fileUpload from 'express-fileupload';
import config from '../../../config';
import { users } from '../../../db/stores';
import s3 from '../../../utils/s3';
import storeTimeline from '../../../operations/storeTimeline';

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
    const splittedName = file.name.split('.');
    const ext = splittedName[splittedName.length - 1];
    await s3.putObject(`${file.md5}.${ext}`, { ContentMD5: checksum }, file.data);
    await users.appendValue(req.currentUser.id, 'dataHashes', file.md5);
  });
  await Promise.all(promises);

  res.json({ message: 'File uploaded!' });
});

router.post('/kml', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.boom.badRequest('No files were uploaded.');
  }

  const promises = Object.values(req.files).map(async (file) => {
    // const data = Buffer.from(file.data, 'hex').toString('base64');
    await storeTimeline({ id: 'bc0ad44d-29d1-4645-b8c0-85a327d21e1e' }, file.data.toString());
  });
  await Promise.all(promises);

  res.json({ message: 'File uploaded!' });
});

export default router;
