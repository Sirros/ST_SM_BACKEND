const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const HonorsModel = sequelize.define(
  "honors",
  {
    info: { type: DataTypes.STRING, allowNull: false },
    game_type: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "type",
    },
    dateTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = HonorsModel;
