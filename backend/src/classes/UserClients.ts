import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
  
  @Table({ timestamps: false })
  class UserClients extends Model<UserClients> {
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
  
  export default UserClients;
  