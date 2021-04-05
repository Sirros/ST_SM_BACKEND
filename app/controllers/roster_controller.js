/**
 * 获取队伍人员列表信息 2021.04.05
 */
const { Op } = require("sequelize");
const RosterModel = require("../models/members");

const getRosterList = async function () {
  const managers = await RosterModel.findAll({
    where: {
      [Op.or]: [{ attr: "队长" }, { attr: "经理" }],
    },
  });
  const players = await RosterModel.findAll({
    where: {
      attr: "队员",
    },
  });
  return {
    managers,
    players,
  };
};

module.exports = { getRosterList };
