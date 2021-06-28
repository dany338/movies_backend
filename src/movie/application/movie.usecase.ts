import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { Result } from '../../shared/application/result.interface';
import { MovieModel } from '../domain/movie.model';
import { MovieRepository } from './movie.repository';

export class MovieUseCase extends UseCaseRepository<
  MovieModel,
  MovieRepository
> {
  constructor(public operation: MovieRepository) {
    super(operation);
  }

  async listByUserAndPublic(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<MovieModel>> {
    return this.operation.listByUserAndPublic(where, relations, order);
  }
}
