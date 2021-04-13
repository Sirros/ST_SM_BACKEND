const AnnouncementModel = require("../models/announcement");
const SechduleModel = require("../models/sechdules");

const saveNewAnnoucement = async function (params) {
  const { dateTime, editMode, title } = params;
  const insertObj = {
    post_time: dateTime,
    edit_mode: editMode,
    title: title,
  };
  if (editMode === "simpleText") {
    insertObj.content = params.simpleText;
  } else if (editMode === "powerText") {
    insertObj.content = params.powerContent;
  }
  return await AnnouncementModel.create(insertObj);
};

const saveNewSechdule = async function (params) {
  const { title, site, dateTime, events } = params;
  const insertObj = { time: dateTime };
  const str = events.join("；");

  insertObj.time = (insertObj.time - (insertObj.time % 10000)) / 100;

  const eventName = `标题：${title}；${str}；地点：${
    site == "court_2" ? "二号场" : site == "court_3" ? "三号场" : "待定"
  }`;

  console.log("params");
  insertObj.eventName = eventName;
  console.log(insertObj);

  return await SechduleModel.create(insertObj);
};

module.exports = {
  saveNewAnnoucement,
  saveNewSechdule,
};
