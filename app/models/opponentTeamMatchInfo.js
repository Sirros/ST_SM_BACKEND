const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const OpponentTeamMatchInfoModel = sequelize.define(
  "opponent_team_match_info",
  {
    matchId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    ST: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ND: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TH: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = OpponentTeamMatchInfoModel;
