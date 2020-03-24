import Router from 'express-promise-router';
import { users } from '../../db/stores';

const router = Router();

router.post('/', async (req, res) => {
  await users.upsert(req.currentUser.id, req.currentUser);
  res.status(202).end();
});

router.get('/score', async (req, res) => {
  const { riskScores } = await users.get(req.currentUser.id);
  const score = riskScores && riskScores.length > 0 && riskScores[riskScores.length - 1].value;
  res.json({ score });
});

export default router;
