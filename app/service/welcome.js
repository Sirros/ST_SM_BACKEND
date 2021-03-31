const welcomeController = require("../controllers/members_controller");

const {
  getTotalMembers,
  getPictureCount,
  getTeamInfo,
  getAnnouncement,
  getRules,
  getSlideShows,
} = welcomeController;

const getWelcomePageInfo = async function () {
  const counters = await getTotalMembers();
  const infoObj = await getTeamInfo();
  const photos = await getPictureCount();
  const announcement = await getAnnouncement();
  const rules = await getRules();
  const slideShow = await getSlideShows();
  return {
    ...counters,
    ...infoObj[0],
    photos,
    announcement,
    rules,
    slideShow,
  };
};

module.exports = { getWelcomePageInfo };
