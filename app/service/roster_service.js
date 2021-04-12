const rosterController = require("../controllers/roster_controller");

const { getRosterList } = rosterController;

const getRosterPageDate = async function () {
  return await getRosterList();
};

module.exports = { getRosterPageDate };
