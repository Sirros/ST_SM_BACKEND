const OurTeamMatchInfoModel = require("../models/ourTeamMatchInfo");
const OpponentTeamMatchInfoModel = require("../models/opponentTeamMatchInfo");
const MatchPlayersInfoModel = require("../models/matchPlayersInfo");

const getMatchData = async function () {
  return await OurTeamMatchInfoModel.findAll();
};

const getOpponentData = async function () {
  return await OpponentTeamMatchInfoModel.findAll();
};

const getMatchPlayersInfo = async function () {
  return await MatchPlayersInfoModel.findAll();
};

module.exports = {
  getMatchData,
  getOpponentData,
  getMatchPlayersInfo,
};
