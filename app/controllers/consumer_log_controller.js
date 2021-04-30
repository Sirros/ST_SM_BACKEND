const ConsumerLog = require("../models/consumer_log");
const TeamInfoModel = require("../models/teamInfo");

const saveChange = async function (params) {
  const { money, log } = params;
  const info = await TeamInfoModel.findOne({ title: "篮球队" });
  const pre = info.dataValues.expenditure - money;

  await TeamInfoModel.update(
    { expenditure: pre },
    {
      where: {
        title: "篮球队",
      },
    }
  );

  return await ConsumerLog.create({ money, purpose: log });
};

module.exports = {
  saveChange,
};
