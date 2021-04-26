const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const OpponentTeamMatchInfoModel = sequelize.define(
  "opponent_team_match_info",
  {
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ST: { type: DataTypes.INTEGER, allowNull: false },
    ND: { type: DataTypes.INTEGER, allowNull: false },
    RD: { type: DataTypes.INTEGER, allowNull: false },
    TH: { type: DataTypes.INTEGER, allowNull: false },
    team: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = OpponentTeamMatchInfoModel;
