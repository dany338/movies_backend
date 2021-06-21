import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { MovieModel } from '../domain/movie.model';
import { MovieRepository } from './movie.repository';

export class MovieUseCase extends UseCaseRepository<MovieModel, MovieRepository> {
  constructor(public operation: MovieRepository) {
    super(operation);
  }
}
