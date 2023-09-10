import asyncHandler from 'express-async-handler';
import httpStatus from 'http-status';
import { personService } from 'services';

export const getPerson = asyncHandler(async (req, res) => {
  const person = await personService.getPerson(req.query);
  res.status(httpStatus.OK).json({
    status: 'success',
    code: httpStatus.OK,
    data: person,
  });
});

export const getAllPersons = asyncHandler(async (req, res) => {
  const persons = await personService.getAllPersons();
  res.status(httpStatus.OK).json({
    status: 'success',
    code: httpStatus.OK,
    data: persons,
  });
});

export const createPerson = asyncHandler(async (req, res) => {
  const person = await personService.createPerson(req.body);
  res.status(httpStatus.CREATED).json({
    status: 'success',
    code: httpStatus.CREATED,
    data: person,
  });
});

export const updatePerson = asyncHandler(async (req, res) => {
  const person = await personService.updatePerson(req.query, req.body);
  res.status(httpStatus.OK).json({
    status: 'success',
    code: httpStatus.OK,
    data: person,
  });
});

export const deletePerson = asyncHandler(async (req, res) => {
  await personService.deletePerson(req.query);
  res.status(httpStatus.OK).json({
    status: 'success',
    code: httpStatus.OK,
    message: 'Person deleted',
  });
});
