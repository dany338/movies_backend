import { MovieModel } from '../domain/movie.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { MovieRepository } from '../application/movie.repository';
import { Movie } from '../../entities/movie.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';

export class MovieOperation
  extends OperationRepository<MovieModel>
  implements MovieRepository
{
  constructor() {
    super(Movie);
  }
}
