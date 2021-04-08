const RosterModel = require("../models/members");

const getTotal = async function () {
  return await RosterModel.findAll();
};

const updateItem = async function (params) {
  const { changeRow, uid } = params;
  await RosterModel.update(changeRow, {
    where: {
      studentId: uid,
    },
  });
  return RosterModel.findAll();
};

const addItem = async function (params) {
  await RosterModel.create(params);
  return RosterModel.findAll();
};

module.exports = { getTotal, updateItem, addItem };
