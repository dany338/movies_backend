import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  refreshToken: string;

  @OneToMany(() => Movie, (movie) => movie.user) // { cascade: true }
  movies: Movie[];
}
