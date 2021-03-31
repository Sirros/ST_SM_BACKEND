/**
 * 获取首页各个部分信息 2021.04.01
 */
const MemberModel = require("../models/members");
const PictureModel = require("../models/picture");
const TeamInfoModel = require("../models/teamInfo");
const AnnouncementModel = require("../models/announcement");
const RulesModel = require("../models/rules");
const SlideShowModel = require("../models/slideShow");

const getTotalMembers = async function () {
  const result = await MemberModel.findAll();
  const managers = result.filter(
    (item) => item.attr === "队长" || item.attr === "经理"
  ).length;
  const players = result.filter((item) => item.attr === "队员").length;
  return { players, managers };
};

const getPictureCount = async function () {
  return await PictureModel.count();
};

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

module.exports = {
  getTotalMembers,
  getPictureCount,
  getTeamInfo,
  getAnnouncement,
  getRules,
  getSlideShows,
};
