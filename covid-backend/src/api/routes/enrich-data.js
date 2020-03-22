import { Router } from 'express';
import requestValidation from '../middlewares/requestValidation';
import DataModel from '../../db/index';
import asyncRequestHandler from '../middlewares/asyncRequestHandler';

const router = Router();

const validate = {
  enrichData(inputs) {
    const { status, since } = inputs;
    if (!status) {
      throw new Error('wrong!');
    }
    return;
  }
};

router.post('/enrich-data', requestValidation(validate.enrichData, 'body'), (req, res) => {
  DataModel.save('enrich-enrich', req.body);
  res.status(202).end();
});

export default router;
