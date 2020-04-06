import Router from 'express-promise-router';
import { users } from '../../db/stores';
import { fetchLocationHistory } from '../../operations/locationHistory';

const router = Router();

router.post('/', async (req, res) => {
  await users.upsert(req.currentUser.id, req.currentUser);
  res.status(202).end();
});

router.get('/me/score', async (req, res) => {
  const { riskScores } = await users.get(req.currentUser.id);
  const score = riskScores && riskScores.length > 0 && riskScores[riskScores.length - 1].value;
  res.json({ score });
});

router.get('/me/location-history', async (req, res) => res.json(await fetchLocationHistory(req.currentUser.id)));

export default router;
