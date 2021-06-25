import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'movie' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  gender: string;

  @Column({ type: 'integer', length: 3 })
  rating: number;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @Column({ type: 'boolean' })
  public: boolean;

  @ManyToOne(() => User, (user) => user.movies)
  user: User;
}
