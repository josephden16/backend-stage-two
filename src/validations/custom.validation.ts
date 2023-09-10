import vine, { VineString } from '@vinejs/vine';
import ApiError from 'common/errors/api-error';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

declare module '@vinejs/vine' {
  interface VineString {
    mongodbId(): this;
  }
}

function mongodbId(value: unknown, options: any, field: any) {
  if (typeof value !== 'string') {
    return;
  }

  const notValid = !mongoose.Types.ObjectId.isValid(value);

  if (notValid) {
    field.report('The {{ field }} field is not valid', 'mongodbId', field);
  }
}

export const mongodbIdRule = vine.createRule(mongodbId);

export const validateMongodbId = (id: string, errorMessage?: string) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new ApiError(httpStatus.BAD_REQUEST, errorMessage || 'Invalid data passed');
};

VineString.macro('mongodbId', function (this: VineString) {
  return this.use(mongodbIdRule());
});
