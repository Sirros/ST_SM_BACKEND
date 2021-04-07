const honorController = require("../controllers/honor_controller");

const { getHonorList } = honorController;

const retHonorList = async function () {
  const list = await getHonorList();
  const anta = [];
  const freshman = [];
  let ret = {};
  list.forEach((l) => {
    if (l.dataValues) {
      if (l.dataValues.game_type === "新生杯") {
        freshman.push(l);
      } else {
        anta.push(l);
      }
    }
  });
  ret = { anta, freshman };
  return ret;
};

module.exports = { retHonorList };
