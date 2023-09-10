import { personController } from 'controllers';
import express from 'express';
import { validate } from 'middlewares/validate.middleware';
import { personValidation } from 'validations';

const personRouter = express.Router();

personRouter.get('/all', personController.getAllPersons);
personRouter
  .route('/')
  .get(validate(personValidation.getPerson), personController.getPerson)
  .post(validate(personValidation.cratePerson), personController.createPerson)
  .put(validate(personValidation.updatePerson), personController.updatePerson)
  .delete(validate(personValidation.deletePerson), personController.deletePerson);

export default personRouter;
