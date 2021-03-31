const MemberModel = require("../models/members");

const getTotalMembers = async function () {
  const result = await MemberModel.findAll();
  return result;
};

module.exports = { getTotalMembers };
