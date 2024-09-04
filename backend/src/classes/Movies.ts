import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
  
  @Table({ timestamps: false })
  class Movies extends Model<Movies> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column
    title: string;
  
    @Column
    releaseDate: string;
  
    @Column
    genre: string;
  
    @Column
    director: string;
  
    @Column
    actors: string;
  
    @Column
    awards: string;

    @Column
    duration: string;

    @Column
    image: string;

  }
  
  export default Movies;
  