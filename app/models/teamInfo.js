const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const TeamInfoModel = sequelize.define(
  "team_infos",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    comingMatch: { type: DataTypes.STRING, allowNull: true },
    discription: { type: DataTypes.STRING, allowNull: false },
    expenditure: { type: DataTypes.STRING, allowNull: true },
    logoUrl: { type: DataTypes.STRING, allowNull: false },
    weather: { type: DataTypes.STRING, allowNull: true },
    groupChat: { type: DataTypes.STRING, allowNull: true },
    teamAttr: { type: DataTypes.STRING, allowNull: true },
    department: { type: DataTypes.STRING, allowNull: true },
    HeadofDep: { type: DataTypes.STRING, allowNull: true },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = TeamInfoModel;
