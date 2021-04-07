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
        attributes: ["url", "id"],
      },
    ],
  });
  return { data };
};

const insertTitle = async function (params) {
  return MomentTitleModel.create(params);
};

module.exports = { getFile, insertTitle };
