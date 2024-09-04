import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";

@Table
class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  favoriteMovie: string;

  @Column
  favoriteGenre: string;

  @Column
  evaluatedFilms: number;

}

export default User;
