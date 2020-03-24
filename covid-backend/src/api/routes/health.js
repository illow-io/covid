import { Router } from 'express';
import config from '../../config';

const router = Router();

router.get('/', (_req, res) => res.json({
  api: {
    name: config.get('app').name,
    version: config.get('app').version
  }
}));

export default router;
