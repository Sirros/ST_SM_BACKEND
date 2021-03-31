const welcomeController = require("../controllers/members_controller");

const { getTotalMembers } = welcomeController;

const getWelcomePageInfo = function () {
  return getTotalMembers();
};

module.exports = { getWelcomePageInfo };
