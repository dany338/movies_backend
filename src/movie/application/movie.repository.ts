import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { MovieModel } from '../domain/movie.model';

export interface MovieRepository extends RepositoryBase<MovieModel> {
  listByUserAndPublic(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<MovieModel>>;
}
