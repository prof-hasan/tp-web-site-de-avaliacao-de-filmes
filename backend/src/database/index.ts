import { Sequelize } from "sequelize-typescript";
import UserClients from "../classes/UserClients";
import MoviesList from "../classes/MoviesList";
import Movies from "../classes/Movies";


// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = [
    UserClients,
    MoviesList,
    Movies,
];

sequelize.addModels(models);

export default sequelize;
