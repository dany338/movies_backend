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
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(
          new RegExp('^(?=.*[a-z])(?=.*[A-Z])[0-9](?=.*[!@#?]]){10,30}$')
        )
        .required(),
      movies: Joi.array(),
    }),
  },
  UPDATE: {
    params: paramId,
    body: Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])[0-9](?=.*[!@#?]]){10,30}$')
      ),
    }),
  },
  REMOVE: {
    params: paramId,
  },
};
