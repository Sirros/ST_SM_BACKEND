const subDataResultController = require("../controllers/sub_dataResult_controller");

const { insertMatch } = subDataResultController;

const insertMainFunc = async function (detail, basicInfo) {
  return await insertMatch(detail, basicInfo);
};

module.exports = { insertMainFunc };
