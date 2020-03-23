import Router from 'express-promise-router';
import { requestValidation, validateAuthentication } from '../middlewares';
import { removeEmpty } from '../../utils';
import DataModel from '../../db/index';

const router = Router();
router.use(validateAuthentication);

const validate = {
  enrichData(inputs) {
    const statusAvailable = ['have', 'dontHave', 'mayHave', 'had', 'N/A'];
    const { status, since } = inputs;
    if (!statusAvailable.includes(status)) {
      throw new Error('wrong!');
    }
    return;
  }
};

router.post('/enrich-data', requestValidation(validate.enrichData, 'body'), (req, res) => {
  const data = removeEmpty(req.body);
  DataModel.save({ ...data, ...req.currentUser });
  res.status(202).end();
});

export default router;
