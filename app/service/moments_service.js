const momentController = require("../controllers/moment_controller");

const { getFile, insertTitle, addList } = momentController;

const getFileList = async function () {
  return await getFile();
};

const addFile = async function (params) {
  return insertTitle(params);
};

const savePicture = async function (params) {
  return addList(params);
};

module.exports = { getFileList, addFile, savePicture };
