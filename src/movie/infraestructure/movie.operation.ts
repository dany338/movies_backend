/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
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
  implements MovieRepository {
  constructor() {
    super(Movie);
  }

  async listByUserAndPublic(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<MovieModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Movie> = getRepository(Movie);
    const data: MovieModel[] = await repository.find({ where, relations, order });
    console.log('listByUserAndPublic', data);
    return ResponseDto.format(trace, data);
  }
}
