import vine from '@vinejs/vine';

export const getPerson = vine.object({
  params: vine.object({
    id: vine.string().mongodbId(),
  }),
});

export const deletePerson = vine.object({
  params: vine.object({
    id: vine.string().mongodbId(),
  }),
});

export const updatePerson = vine.object({
  params: vine.object({
    id: vine.string().mongodbId(),
  }),
  body: vine.object({
    name: vine.string().minLength(2).maxLength(100),
  }),
});

export const cratePerson = vine.object({
  body: vine.object({
    name: vine.string().minLength(2).maxLength(100),
  }),
});
