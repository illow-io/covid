import Router from 'express-promise-router';
import { requestValidation } from '../../middlewares';
import { users } from '../../../db/stores';

const router = Router();

const validate = {
  enrichData: (inputs) => {
    const statusAvailable = ['have', 'dontHave', 'mayHave', 'had', 'N/A'];
    const { status } = inputs;
    if (!statusAvailable.includes(status)) {
      return 'Status not valid';
    }
    return;
  }
};

router.post('/', requestValidation(validate.enrichData, 'body'), async (req, res) => {
  const { status, since } = req.body;
  
  const value = since ? { status, since } : { status };
  await users.appendValue(req.currentUser.id, 'covidStatuses', value);
  res.status(202).end();
});

export default router;
