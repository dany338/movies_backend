import Joi from 'joi';

const paramId = Joi.object({
  id: Joi.number().required(),
});

export const schemas = {
  LIST_ONE: {
    params: paramId,
  },
  LIST_BY_PAGE: {
    params: Joi.object({
      page: Joi.number().min(0).required(),
    }),
  },
  INSERT: {
    body: Joi.object({
      name: Joi.string().required(),
      gender: Joi.string().required(),
      rating: Joi.number().required(),
      description: Joi.string().required(),
      public: Joi.boolean().required(),
      user: Joi.number().required(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      name: Joi.string(),
      gender: Joi.string(),
      rating: Joi.number(),
      description: Joi.string(),
      public: Joi.boolean(),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
