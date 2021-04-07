const momentController = require("../controllers/moment_controller");

const { getFile } = momentController;

const getFileList = async function () {
  return await getFile();
};

module.exports = { getFileList };
