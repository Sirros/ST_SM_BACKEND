/**
 * 获取首页各个部分信息 2021.04.01
 */
const MemberModel = require("../models/members");
// const PictureModel = require("../models/picture");
const TeamInfoModel = require("../models/teamInfo");
const AnnouncementModel = require("../models/announcement");
const RulesModel = require("../models/rules");
const SlideShowModel = require("../models/slideShow");
const fs = require("fs");

const getTotalMembers = async function () {
  const result = await MemberModel.findAll();
  const managers = result.filter(
    (item) =>
      item.attr === "队长" || item.attr === "副队长" || item.attr === "经理"
  ).length;
  const players = result.filter((item) => item.attr === "队员").length;
  const autoScrollList = result.map((item) => item.signature);
  return { players, managers, autoScrollList };
};

// const getPictureCount = async function () {
//   return await PictureModel.count();
// };

const getTeamInfo = async function () {
  return await TeamInfoModel.findAll();
};

const getAnnouncement = async function () {
  return await AnnouncementModel.findAll();
};

const getRules = async function () {
  return await RulesModel.findAll();
};

const getSlideShows = async function () {
  return await SlideShowModel.findAll();
};

const updateUser = async function (params) {
  const targetId = params.studentId;

  if (params.imageUrl) {
    const extName = params.fileName.split(".")[1];
    const base64Data = params.imageUrl.replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = Buffer.from(base64Data, "base64");
    params.avatar = `/images/avatar/${targetId}.${extName}`;

    fs.writeFile(
      `./public/images/avatar/${targetId}.${extName}`,
      dataBuffer,
      function (err) {
        return err;
      }
    );
  }

  await MemberModel.update(params, { where: { studentId: targetId } });

  return await MemberModel.findOne({
    where: {
      studentId: targetId,
    },
  });
};
module.exports = {
  getTotalMembers,
  // getPictureCount,
  getTeamInfo,
  getAnnouncement,
  getRules,
  getSlideShows,
  updateUser,
};
