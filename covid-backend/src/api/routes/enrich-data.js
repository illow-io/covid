import { Router } from 'express';
import requestValidation from '../middlewares/requestValidation';
import DataModel from '../../db/index';
import asyncRequestHandler from '../middlewares/asyncRequestHandler';

const router = Router();

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
  DataModel.save(req.body);
  res.status(202).end();
});

export default router;
