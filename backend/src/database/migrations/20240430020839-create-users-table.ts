import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Users", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("Users");
  }
};
