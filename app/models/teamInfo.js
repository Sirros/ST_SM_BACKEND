const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const TeamInfoModel = sequelize.define(
  "team_infos",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    comingMatch: { type: DataTypes.NUMBER, allowNull: true },
    discription: { type: DataTypes.STRING, allowNull: false },
    expenditure: { type: DataTypes.NUMBER, allowNull: true },
    logoUrl: { type: DataTypes.STRING, allowNull: false },
    weather: { type: DataTypes.STRING, allowNull: true },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = TeamInfoModel;
