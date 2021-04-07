/**
 * 获取moment 2021.04.07
 */
const MomentTitleModel = require("../models/momentsTitle");

const getFile = async function () {
  const data = await MomentTitleModel.findAll();
  console.log(data);
  return { data };
};

module.exports = { getFile };
