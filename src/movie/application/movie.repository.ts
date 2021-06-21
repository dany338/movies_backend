import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { MovieModel } from '../domain/movie.model';

export interface MovieRepository extends RepositoryBase<MovieModel> {
}
