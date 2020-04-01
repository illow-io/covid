import Router from 'express-promise-router';
import hotSpots from '../../../db/mockData/hotSpots.json';

const router = Router();

router.get('/', (_req, res) => res.json(hotSpots));

export default router;
