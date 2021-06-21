import { RepositoryBase } from '../../shared/application/base.repository';
import { MovieModel } from '../domain/movie.model';

export type MovieRepository = RepositoryBase<MovieModel>;
