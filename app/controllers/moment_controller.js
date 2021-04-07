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
        attributes: ["url"],
      },
    ],
  });
  return { data };
};

module.exports = { getFile };
