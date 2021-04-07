const matchInfoController = require("../controllers/match_info_controller");

const {
  getMatchData,
  getOpponentData,
  getMatchPlayersInfo,
} = matchInfoController;

const getMatchInfo = async function () {
  const our = await getMatchData();
  const oppo = await getOpponentData();
  const players = await getMatchPlayersInfo();
  const details = [];

  for (let i = 0; i < players.length; i++) {
    const {
      score,
      onepoint_get,
      penalty_time,
      twopoint_get,
      shot_time,
      threepoint_get,
      threepoint_time,
      rebound,
      steal,
      assist,
      block,
      fault,
    } = players[i].dataValues;

    players[i].dataValues.shot = `${twopoint_get}/${shot_time}`;
    players[i].dataValues.threepoint = `${threepoint_get}/${threepoint_time}`;
    players[i].dataValues.penalty = `${onepoint_get}/${penalty_time}`;
    players[i].dataValues.efficient =
      (score +
        rebound +
        assist +
        steal +
        block -
        (shot_time + threepoint_time - (twopoint_get + threepoint_get)) -
        (penalty_time - onepoint_get) -
        fault) /
      10;
  }

  if (our.length && oppo.length) {
    our.forEach((o, i) => {
      const item = oppo.find((op) => op.matchId === o.matchId);

      if (item) {
        details.push({
          our_team: { ...our[i], key: o.team },
          opponent_team: { ...item, key: item.team },
          our_players_detail: [],
        });
      }
    });
  }
  details.forEach((d, idx) => {
    let oneCount = 0;
    let oneGet = 0;
    let twoCount = 0;
    let twoGet = 0;
    let threeCount = 0;
    let threeGet = 0;
    let total = 0;
    const { our_team, opponent_team } = d;
    const { ST, ND, RD, TH } = opponent_team.dataValues;

    (d.zhexian_Data = [
      {
        section: "1ST",
        team: "team_1",
        temperature: our_team.dataValues.ST,
      },
      {
        section: "1ST",
        team: "team_2",
        temperature: ST,
      },
      {
        section: "2ND",
        team: "team_1",
        temperature: our_team.dataValues.ND,
      },
      {
        section: "2ND",
        team: "team_2",
        temperature: ND,
      },
      {
        section: "3RD",
        team: "team_1",
        temperature: our_team.dataValues.RD,
      },
      {
        section: "3RD",
        team: "team_2",
        temperature: RD,
      },
      {
        section: "4TH",
        team: "team_1",
        temperature: our_team.dataValues.TH,
      },
      {
        section: "4TH",
        team: "team_2",
        temperature: TH,
      },
      {
        section: "Total",
        team: "team_1",
        temperature:
          our_team.dataValues.ST +
          our_team.dataValues.ND +
          our_team.dataValues.RD +
          our_team.dataValues.TH,
      },
      {
        section: "Total",
        team: "team_2",
        temperature: ST + ND + RD + TH,
      },
    ]),
      players.forEach((p, idx) => {
        const {
          onepoint_get,
          penalty_time,
          twopoint_get,
          shot_time,
          threepoint_get,
          threepoint_time,
          _matchId,
        } = p.dataValues;

        if (_matchId == our_team.dataValues.matchId) {
          oneCount += penalty_time;
          oneGet += onepoint_get;
          twoCount += shot_time;
          twoGet += twopoint_get;
          threeCount += threepoint_time;
          threeGet += threepoint_get;
          total = oneGet + twoGet + threeGet;

          d.our_players_detail.push(p.dataValues);

          d.our_binData = [
            { item: "两分球", count: twoGet, percent: twoGet / total },
            { item: "三分球", count: threeGet, percent: threeGet / total },
            { item: "罚球", count: oneGet, percent: oneGet / total },
          ];
          d.our_zhuData = [
            { name: "命中", type: "运动战", num: oneGet + twoGet + threeGet },
            { name: "命中", type: "两分球", num: twoGet },
            { name: "命中", type: "三分球", num: threeGet },
            { name: "命中", type: "罚球", num: oneGet },
            {
              name: "未命中",
              type: "运动战",
              num:
                oneCount + twoCount + threeCount - (oneGet + twoGet + threeGet),
            },
            { name: "未命中", type: "两分球", num: twoCount - twoGet },
            { name: "未命中", type: "三分球", num: threeCount - threeGet },
            { name: "未命中", type: "罚球", num: oneCount - oneGet },
          ];
        }
      });
  });

  for (let i = 0; i < details.length; i++) {
    const { dataValues: od } = details[i].our_team;
    const { dataValues: oppod } = details[i].opponent_team;
    details[i].our_team = od;
    details[i].opponent_team = oppod;
  }
  return {
    details,
  };
};

module.exports = {
  getMatchInfo,
};
