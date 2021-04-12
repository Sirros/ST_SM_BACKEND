const teamInfosController = require("../controllers/team_infos_controller");

const { getTeamInfo, updateInfo } = teamInfosController;

const sendTeamInfo = async function () {
  return await getTeamInfo();
};

const updateResult = async function (params) {
  return await updateInfo(params);
};

module.exports = { sendTeamInfo, updateResult };
