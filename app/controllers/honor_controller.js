const HonorsModel = require("../models/honors");

const getHonorList = async function () {
  return await HonorsModel.findAll();
};

const createHonorItem = async function (item) {
  await HonorsModel.create(item);
  return HonorsModel.findAll();
};

const updateHonorItem = async function (newItem) {
  const updateContent = { ...newItem };
  updateContent.info = updateContent.newVal;
  await HonorsModel.update(updateContent, {
    where: { id: updateContent.event },
  });
  return HonorsModel.findAll();
};

module.exports = {
  getHonorList,
  createHonorItem,
  updateHonorItem,
};
