const HonorsModel = require("../models/honors");

const getHonorList = async function () {
  return await HonorsModel.findAll();
};

module.exports = {
  getHonorList,
};
