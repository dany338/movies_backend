/* eslint-disable prettier/prettier */
import { MovieModel } from '../domain/movie.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { MovieRepository } from '../application/movie.repository';
import { Movie } from '../../entities/movie.entity';

export class MovieOperation
  extends OperationRepository<MovieModel>
  implements MovieRepository {
  constructor() {
    super(Movie);
  }
}
