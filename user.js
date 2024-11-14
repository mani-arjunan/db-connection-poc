const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  },
);

module.exports = User;
