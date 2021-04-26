const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const MatchPlayersInfoModel = sequelize.define(
  "match_players_info",
  {
    matchId: { type: DataTypes.NUMBER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    studentId: { type: DataTypes.STRING, allowNull: false },
    score: { type: DataTypes.NUMBER, allowNull: false },
    rebound: { type: DataTypes.NUMBER, allowNull: false },
    assist: { type: DataTypes.NUMBER, allowNull: false },
    shot_time: { type: DataTypes.NUMBER, allowNull: false },
    threepoint_time: { type: DataTypes.NUMBER, allowNull: false },
    penalty_time: { type: DataTypes.NUMBER, allowNull: false },
    block: { type: DataTypes.NUMBER, allowNull: false },
    steal: { type: DataTypes.NUMBER, allowNull: false },
    fault: { type: DataTypes.NUMBER, allowNull: false },
    foul: { type: DataTypes.NUMBER, allowNull: false },
    onepoint_get: { type: DataTypes.NUMBER, allowNull: false },
    twopoint_get: { type: DataTypes.NUMBER, allowNull: false },
    threepoint_get: { type: DataTypes.NUMBER, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MatchPlayersInfoModel;
