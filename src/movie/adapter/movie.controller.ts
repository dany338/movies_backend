import { Request, Response } from 'express';
import { MovieUseCase } from '../application/movie.usecase';
import { MovieModel } from '../domain/movie.model';

export class RoleController {
  constructor(private useCase: MovieUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const movie: Partial<MovieModel> = { id };
    const result = await this.useCase.listOne(movie);
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
    const movie: MovieModel = {
      name: body.name,
      gender: body.gender,
      rating: body.rating,
      description: body.description,
      public: body.public,
      user: +body.user,
    };
    const result = await this.useCase.insert(movie);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: MovieModel = body;
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
