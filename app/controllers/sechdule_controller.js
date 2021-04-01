/**
 * 获取日程表信息 2021.04.01
 */

const SechduleModel = require("../models/sechdules");

const getSechduleDetails = async function () {
  return await SechduleModel.findAll();
};

module.exports = { getSechduleDetails };
