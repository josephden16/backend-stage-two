import vine from '@vinejs/vine';

const idOrName = vine.group([
  vine.group.if((data) => '_id' in data, {
    _id: vine.string().mongodbId().optional(),
  }),
  vine.group.if((data) => 'name' in data, {
    name: vine.string().optional(),
  }),
]);

export const getPerson = vine.object({
  query: vine.object({}).merge(idOrName).optional(),
});

export const deletePerson = vine.object({
  query: vine.object({}).merge(idOrName),
});

export const updatePerson = vine.object({
  query: vine.object({}).merge(idOrName),
  body: vine.object({
    name: vine.string().minLength(2).maxLength(100),
  }),
});

export const cratePerson = vine.object({
  body: vine.object({
    name: vine.string().minLength(2).maxLength(100),
  }),
});
