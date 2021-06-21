import { MovieRepository } from '../../movie/application/movie.repository';
import { Result } from '../../shared/application/result.interface';
import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

export class UserUseCase extends UseCaseRepository<UserModel, UserRepository> {
  constructor(
    public operation: UserRepository,
    public operationMovie: MovieRepository
  ) {
    super(operation);
  }

  async list(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<UserModel>> {
    const response: any = await this.operation.list(where, relations, order);

    return response;
  }

  async insertCipher(entity: UserModel) {
    entity.password = await UserService.cryptPassword(entity.password);
    entity.refreshToken = UserService.generateRefreshToken();

    const listMovies: any[] = [];
    entity.movies.forEach((movie) => {
      console.log('movie', movie),
      listMovies.push(this.operationMovie.insert(movie));
    });

    const movies = await Promise.all(listMovies);
    entity.movies = movies;

    return this.operation.insertCipher(entity);
  }
}
