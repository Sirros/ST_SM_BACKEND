/**
 * 获取moment 2021.04.07
 */
const MomentTitleModel = require("../models/momentsTitle");
const MomentDetailsModel = require("../models/momentsDetails");

const getFile = async function () {
  const data = await MomentTitleModel.findAndCountAll({
    include: [
      {
        model: MomentDetailsModel,
        as: "picList",
      },
    ],
  });
  console.log(data);
  // return { data };
};
getFile();

module.exports = { getFile };
