import httpStatus from 'http-status';
import { Person } from 'models';
import ApiError from 'common/errors/api-error';

export const getAllPersons = async () => {
  const persons = await Person.find();
  return persons;
};

export const getPerson = async (id: string) => {
  const person = await Person.findById(id);
  if (!person) throw new ApiError(httpStatus.BAD_REQUEST, 'This person does not exist.');
  return person;
};

export const updatePerson = async (personId: string, newInfo: any) => {
  const person = await getPerson(personId);
  if (newInfo.name !== person.name && (await Person.isNameTaken(newInfo.name))) {
    throw new ApiError(httpStatus.CONFLICT, 'This name is already taken.');
  }
  const newPerson = await Person.findByIdAndUpdate(personId, newInfo, { new: true, runValidators: true });
  return newPerson;
};

export const deletePerson = async (data: any) => {
  const person = await getPerson(data);
  if (!person) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This person does not exist.');
  }
  await Person.findOneAndDelete({ ...data });
};

export const createPerson = async (personBody: any) => {
  if (await Person.isNameTaken(personBody.name)) {
    throw new ApiError(httpStatus.CONFLICT, 'This name is already taken.');
  }
  return Person.create(personBody);
};
