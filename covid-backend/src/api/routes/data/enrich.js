import Router from 'express-promise-router';
import { requestValidation } from '../../middlewares';
import { users } from '../../../db/stores';

const router = Router();

const validate = {
  enrichData(inputs) {
    const statusAvailable = ['have', 'dontHave', 'mayHave', 'had', 'N/A'];
    const { status } = inputs;
    if (!statusAvailable.includes(status)) {
      return res.boom.badRequest('Status not valid');
    }
    return;
  }
};

router.post('/', requestValidation(validate.enrichData, 'body'), async (req, res) => {
  const { status, since } = req.body;
  await users.appendValue(req.currentUser.id, 'covidStatuses', { status, since });
  res.status(202).end();
});

export default router;
