const momentController = require("../controllers/moment_controller");

const { getFile, insertTitle } = momentController;

const getFileList = async function () {
  return await getFile();
};

const addFile = async function (params) {
  console.log(params);
  return insertTitle(params);
};

module.exports = { getFileList, addFile };
