const RosterModel = require("../models/members");

const getTotal = async function () {
  return await RosterModel.findAll({
    order: [["grade", "ASC"]],
  });
};

const updateItem = async function (params) {
  const { changeRow, uid } = params;
  await RosterModel.update(changeRow, {
    where: {
      studentId: uid,
    },
  });
  return RosterModel.findAll({
    order: [["grade", "ASC"]],
  });
};

const addItem = async function (params) {
  if (params.attr === "经理") {
    params.type = "manager";
  } else if (params.attr === "队长" || params.attr === "副队长") {
    params.type = "captain";
  } else {
    params.type = "baller";
  }
  await RosterModel.create(params);
  return RosterModel.findAll({
    order: [["grade", "ASC"]],
  });
};

const deleteItem = async function (params) {
  await RosterModel.destroy({
    where: {
      studentId: params.uid,
    },
  });
  return RosterModel.findAll({
    order: [["grade", "ASC"]],
  });
};

module.exports = { getTotal, updateItem, addItem, deleteItem };
