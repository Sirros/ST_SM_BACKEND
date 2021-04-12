const TeamInfoModel = require("../models/teamInfo");
const MemberModel = require("../models/members");
const RulesModel = require("../models/rules");
const _ = require("lodash");
const fs = require("fs");

const getTeamInfo = async function () {
  let res = {};
  const infos = await TeamInfoModel.findAll();
  const total = await MemberModel.findAll();

  const { teamAttr, department, HeadofDep } = infos[0].dataValues;

  res = { ...infos[0].dataValues };

  delete res.teamAttr;
  delete res.department;
  delete res.HeadofDep;

  res.departmentInfo = {
    teamAttr,
    department,
    HeadofDep: [{ value: HeadofDep }],
  };
  res.teamMembers = [];
  res.captain = [];
  res.vice_captain = [];
  res.manager = [];

  for (let i = 0; i < total.length; i++) {
    if (total[i].dataValues.attr === "经理") {
      res.manager.push(total[i].dataValues.name);
    }
    if (total[i].dataValues.attr === "队长") {
      res.captain.push(total[i].dataValues.name);
    }
    if (total[i].dataValues.attr === "副队长") {
      res.vice_captain.push(total[i].dataValues.name);
    }
    res.teamMembers.push({
      value: total[i].dataValues.name,
      id: total[i].dataValues.studentId,
    });
  }

  // delete res.id;
  delete res.title;
  delete res.comingMatch;
  delete res.logoUrl;
  delete res.weather;

  return res;
};

const updateInfo = async function (params) {
  const infos = await TeamInfoModel.findAll();
  const total = await MemberModel.findAll();

  const {
    qq_number,
    principal,
    captain,
    vice_captain,
    manager,
    criterion,
    imgB64,
  } = params;
  const obj = {};

  if (imgB64) {
    const base64Data = imgB64.replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = Buffer.from(base64Data, "base64");
    fs.writeFile("./public/images/logo/logo.jpeg", dataBuffer, function (err) {
      return err;
    });
  }

  obj.groupChat = qq_number;
  obj.criterion = criterion;
  obj.principal = principal;
  await TeamInfoModel.update(obj, { where: { id: 1 } });

  total.forEach(async (p) => {
    const _name = p.dataValues.name;
    if (captain.includes(_name)) {
      await MemberModel.update({ attr: "队长" }, { where: { name: _name } });
    } else if (vice_captain.includes(_name)) {
      await MemberModel.update({ attr: "副队长" }, { where: { name: _name } });
    } else if (manager.includes(_name)) {
      await MemberModel.update({ attr: "经理" }, { where: { name: _name } });
    } else {
      await MemberModel.update({ attr: "队员" }, { where: { name: _name } });
    }
  });

  let res = {};
  res = { ...infos[0].dataValues };
  const { teamAttr, department, HeadofDep } = infos[0].dataValues;
  delete res.teamAttr;
  delete res.department;
  delete res.HeadofDep;

  const teamInfos = await TeamInfoModel.findAll();
  res.departmentInfo = {
    teamAttr,
    department,
    HeadofDep: [{ value: HeadofDep }],
  };
  res.teamMembers = [];
  res.captain = captain;
  res.vice_captain = vice_captain;
  res.manager = manager;
  res.groupChat = teamInfos[0].dataValues.groupChat;

  for (let i = 0; i < total.length; i++) {
    res.teamMembers.push({
      value: total[i].dataValues.name,
      id: total[i].dataValues.studentId,
    });
  }

  delete res.id;
  delete res.title;
  delete res.comingMatch;
  delete res.logoUrl;
  delete res.weather;

  if (params.criterion) {
    await RulesModel.create({ item: params.criterion });
  }

  return res;
};

module.exports = { getTeamInfo, updateInfo };
