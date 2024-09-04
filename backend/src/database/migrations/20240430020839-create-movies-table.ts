import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("Movies", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      actors: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      awards: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("Movies");
  }
};
