/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { UserUseCase } from '../application/user.usecase';
import { UserModel } from '../domain/user.model';

export class UserController {
  constructor(private useCase: UserUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const user: Partial<UserModel> = { id };
    const result = await this.useCase.listOne(user);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const params = req.params;
    const page = +params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const user: UserModel = {
      name: body.name,
      email: body.email,
      password: body.password,
      movies: body.movies.map((movie: string) => +movie),
    };
    const result = await this.useCase.insertCipher(user);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: UserModel = body;
    const id = +params.id;

    const result = await this.useCase.update(user, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
