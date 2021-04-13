const announcementController = require("../controllers/announcement_controller");

const { saveNewAnnoucement, saveNewSechdule } = announcementController;

const sendSaveAnnouncementStatus = async function (params) {
  return saveNewAnnoucement(params);
};

const sendSaveSechduleStatus = async function (params) {
  return saveNewSechdule(params);
};

module.exports = { sendSaveAnnouncementStatus, sendSaveSechduleStatus };
