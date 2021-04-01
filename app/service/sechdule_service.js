const sechduleController = require("../controllers/sechdule_controller");
const { getSechduleDetails } = sechduleController;

const getSeduleDetails = async function () {
  const details = await getSechduleDetails();
  return details;
};

module.exports = { getSeduleDetails };
