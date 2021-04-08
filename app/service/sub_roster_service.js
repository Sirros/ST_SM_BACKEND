const subRosterController = require("../controllers/sub_roster_controller");

const { getTotal, updateItem, addItem } = subRosterController;

const getTotalList = async function () {
  const data = await getTotal();
  const totalList = [];
  data.forEach((d) => {
    totalList.push(d.dataValues);
  });
  return totalList;
};

const updateList = async function (params) {
  const newList = await updateItem(params);
  const data = [];
  newList.forEach((n) => {
    data.push(n.dataValues);
  });
  return data;
};

const addUser = async function (params) {
  const res = await addItem(params);
  const data = [];
  res.forEach((r) => {
    data.push(r.dataValues);
  });
  return data;
};

module.exports = { getTotalList, updateList, addUser };
