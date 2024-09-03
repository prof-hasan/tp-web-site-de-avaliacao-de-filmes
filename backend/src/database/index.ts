import { Sequelize } from "sequelize-typescript";
import User from "../classes/User";
import MoviesList from "../classes/MoviesList";


// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = [
    User,
    MoviesList,
];

sequelize.addModels(models);

export default sequelize;
