import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import User from "./User";
  
  @Table
  class MoviesList extends Model<MoviesList> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column
    movieTitle: string;
  
    @Column
    movieDescription: string;
  
    @Column
    userId: number;
  
  }
  
  export default MoviesList;
  