import { Router } from 'express';
import requestValidation from '../middlewares/requestValidation';
import { save } from '../../db/index';

const router = Router();

const validate = {
  enrichData(inputs) {
    const { option, date } = inputs;
    if (!option || !date) {
      throw new Error('wrong!');
    }
    return;
  }
};

router.post(
  '/enrich-data',
  requestValidation(validate.enrichData, 'body'),
  asyncHandler(async (req, res) => {
    await save('enrich-enrich', req.body);
    res.status(202).end();
  })
);

export default router;
