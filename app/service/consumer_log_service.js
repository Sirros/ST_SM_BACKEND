const consumerLogController = require("../controllers/consumer_log_controller");

const { saveChange } = consumerLogController;

const change = async function (params) {
  return saveChange(params);
};

module.exports = { change };
