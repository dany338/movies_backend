import express from 'express';
import { UserController } from './user.controller';
import { Validators } from '../../shared/adapter/validator';
import { schemas } from './user.schema';
import { ErrorHandler } from '../../helper/errors.handler';
import { AuthenticationGuard } from '../../shared/infraestructure/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/infraestructure/guards/authorization.guard';
import { UserOperation } from '../infraestructure/user.operation';
import { MovieOperation } from '../../movie/infraestructure/movie.operation';
import { UserUseCase } from '../application/user.usecase';

const operation = new UserOperation();
const operationMovie = new MovieOperation();
const useCase = new UserUseCase(operation, operationMovie);
const controller = new UserController(useCase);
const route = express.Router();

route.get(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'USER'),
  controller.list.bind(controller)
);
route.get(
  '/:id',
  AuthenticationGuard.canActivate,
  Validators.validate(schemas.LIST_ONE),
  controller.listOne.bind(controller)
);
route.get(
  '/page/:page',
  Validators.validate(schemas.LIST_BY_PAGE),
  controller.listByPage.bind(controller)
);
route.post(
  '/',
  AuthenticationGuard.canActivate,
  Validators.validate(schemas.INSERT),
  ErrorHandler.asyncError(controller.insert.bind(controller))
);
route.put(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.UPDATE),
  controller.update.bind(controller)
);
route.delete(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.REMOVE),
  controller.remove.bind(controller)
);

export { route };
