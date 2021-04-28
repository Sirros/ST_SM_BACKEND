const welcomeController = require("../controllers/members_controller");

const {
  getTotalMembers,
  getPictureCount,
  getTeamInfo,
  getAnnouncement,
  getRules,
  getSlideShows,
  getComingMatch,
} = welcomeController;

const getWelcomePageInfo = async function () {
  const counters = await getTotalMembers();
  const infoObj = await getTeamInfo();
  const photos = await getPictureCount();
  const announcement = await getAnnouncement();
  const rules = await getRules();
  const slideShow = await getSlideShows();
  const sechdules = await getComingMatch();
  let comingMatch = 0;
  sechdules.forEach((s) => {
    if (s.dataValues.type === "match") {
      comingMatch += 1;
    }
  });
  console.log(comingMatch);

  return {
    ...counters,
    ...infoObj[0],
    photos,
    announcement,
    rules,
    comingMatch: comingMatch,
    slideShow,
  };
};

module.exports = { getWelcomePageInfo };
