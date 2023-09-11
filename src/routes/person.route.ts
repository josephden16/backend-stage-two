import { personController } from 'controllers';
import express from 'express';
import { validate } from 'middlewares/validate.middleware';
import { personValidation } from 'validations';

const personRouter = express.Router();

personRouter
  .route('/')
  .get(personController.getAllPersons)
  .post(validate(personValidation.cratePerson), personController.createPerson);

personRouter
  .route('/:id')
  .get(validate(personValidation.getPerson), personController.getPerson)
  .put(validate(personValidation.updatePerson), personController.updatePerson)
  .delete(validate(personValidation.deletePerson), personController.deletePerson);

export default personRouter;
