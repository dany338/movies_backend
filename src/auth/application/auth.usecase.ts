/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UserService } from '../../user/application/user.service';
import { UserModel } from '../../user/domain/user.model';
import { AuthRepository } from './auth.repository';

export class AuthUseCase {
  constructor(public operation: AuthRepository) {}

  async login(entity: Partial<UserModel>) {
    const user: UserModel = await this.operation.login(
      { email: entity.email },
      ['movies']
    );
    console.log('user', user);

    if (user) {
      const matched = await UserService.decryptPassword(
        entity.password,
        user.password
      );
      if (matched) {
        const accessToken = UserService.generateAccessToken(
          user.name,
          user.movies.map((movie) => movie.name)
        );
        // const refreshToken = UserService.generateRefreshToken();
        return { accessToken, refreshToken: user.refreshToken };
      }
      return null;
    }
    return null;
  }

  async getNewAccessToken(entity: Partial<UserModel>) {
    const user: UserModel = await this.operation.getUserByRefreshToken(
      { refreshToken: entity.refreshToken },
      []
    );

    console.log('user', user);

    if (!user) {
      return null;
    }
    const accessToken = UserService.generateAccessToken(
      user.name,
      user.movies.map((movie) => movie.name)
    );

    return { accessToken, refreshToken: user.refreshToken };
  }
}
