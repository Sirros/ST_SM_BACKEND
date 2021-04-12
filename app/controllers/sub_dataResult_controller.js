const MatchPlayersInfoModel = require("../models/matchPlayersInfo");
const OurTeamMatchInfoModel = require("../models/ourTeamMatchInfo");
const OpponentTeamMatchInfoModel = require("../models/opponentTeamMatchInfo");

const insertMatch = async function (detail, basicInfo) {
  const oppo_obj = {};
  const our_obj = {};
  const { guest, home, opponent } = basicInfo;
  const { first: o_ST, second: o_ND, third: o_RD, fouth: o_TH } = home;
  const { first: g_ST, second: g_ND, third: g_RD, fouth: g_TH } = guest;

  our_obj.team = "软件";
  oppo_obj.team = opponent;

  our_obj.ST = o_ST;
  our_obj.ND = o_ND;
  our_obj.RD = o_RD;
  our_obj.TH = o_TH;

  oppo_obj.ST = g_ST;
  oppo_obj.ND = g_ND;
  oppo_obj.RD = g_RD;
  oppo_obj.TH = g_TH;

  const res = Promise.all([
    OurTeamMatchInfoModel.create(our_obj),
    OpponentTeamMatchInfoModel.create(oppo_obj),
  ]);

  res
    .then(async (r) => {
      for (let i = 0; i < detail.length; i++) {
        detail[i].matchId = r[0].dataValues.matchId;
      }
      console.log(detail);
      await MatchPlayersInfoModel.bulkCreate(detail);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = { insertMatch };
