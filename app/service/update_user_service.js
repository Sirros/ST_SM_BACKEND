const membersController = require("../controllers/members_controller");

const { updateUser } = membersController;

const sendUpdateState = async function (params) {
  return updateUser(params);
};

module.exports = {
  sendUpdateState,
};
