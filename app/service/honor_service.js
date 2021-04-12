const honorController = require("../controllers/honor_controller");

const { getHonorList, createHonorItem, updateHonorItem } = honorController;

const retHonorList = async function () {
  const list = await getHonorList();
  const anta = [];
  const freshman = [];
  list.forEach((l) => {
    if (l.dataValues) {
      if (l.dataValues.game_type === "新生杯") {
        freshman.push(l);
      } else {
        anta.push(l);
      }
    }
  });
  return { anta, freshman };
};

const createItem = async function (item) {
  const newList = await createHonorItem(item);
  const anta = [];
  const freshman = [];
  newList.forEach((n) => {
    if (n.dataValues) {
      if (n.dataValues.game_type === "新生杯") {
        freshman.push(n);
      } else {
        anta.push(n);
      }
    }
  });
  return { anta, freshman };
};

const updateItem = async function (newItem) {
  const updateList = await updateHonorItem(newItem);
  const anta = [];
  const freshman = [];
  updateList.forEach((n) => {
    if (n.dataValues) {
      if (n.dataValues.game_type === "新生杯") {
        freshman.push(n);
      } else {
        anta.push(n);
      }
    }
  });
  return { anta, freshman };
};

module.exports = { retHonorList, createItem, updateItem };
