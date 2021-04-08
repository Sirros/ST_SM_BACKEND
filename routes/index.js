const router = require("koa-router")();
const { getWelcomePageInfo } = require("../app/service/welcome_service");
const { getSeduleDetails } = require("../app/service/sechdule_service");
const { getRosterPageDate } = require("../app/service/roster_service");
const { getMatchInfo } = require("../app/service/match_info_service");
const { getFileList, addFile } = require("../app/service/moments_service");
const {
  retHonorList,
  createItem,
  updateItem,
} = require("../app/service/honor_service");
const {
  getTotalList,
  updateList,
} = require("../app/service/sub_roster_service");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Koa 2!",
  });
});

router.get("/api/getWelcomeData", async (ctx, next) => {
  const info = await getWelcomePageInfo();
  ctx.body = { ...info, ...info.dataValues };
});

router.get("/api/getSechduleData", async (ctx, next) => {
  const detail = await getSeduleDetails();
  ctx.body = detail;
});

router.get("/api/getRosterData", async (ctx, next) => {
  const data = await getRosterPageDate();
  ctx.body = {
    total: {
      ...data,
    },
  };
});

router.get("/api/getResultData", async (ctx, next) => {
  ctx.body = await getMatchInfo();
});

router.get("/api/getFileList", async (ctx, next) => {
  ctx.body = await getFileList();
});

router.post("/api/postNewFile", async (ctx, next) => {
  const ret = {};
  const { creator, createTime, title } = ctx.request.body;
  await addFile({ creator, createTime, title }).then((res) => {
    ret.status = 2001;
    ret.text = "add folder success!";
  });
  ctx.body = ret;
});

router.get("/api/getHonorList", async (ctx, next) => {
  const res = await retHonorList();
  res.honorList = { ...res };
  ctx.body = res;
});

router.post("/api/createHonorItem", async (ctx, next) => {
  const ret = {};
  const { type, info, dateTime } = ctx.request.body;
  await createItem({ game_type: type, info, dateTime }).then((res) => {
    ret.newList = { anta: res.anta, freshman: res.freshman };
  });
  ctx.body = ret;
});

router.post("/api/updateHonorItem", async (ctx, next) => {
  const ret = {};
  const { type, event, newVal } = ctx.request.body;
  await updateItem({ type, event, newVal }).then((res) => {
    ret.updatedList = { anta: res.anta, freshman: res.freshman };
  });
  ctx.body = ret;
});

router.get("/api/getTotalPerson", async (ctx, next) => {
  const res = await getTotalList();
  ctx.body = {
    total: res,
  };
});

router.post("/api/updateUser", async (ctx, next) => {
  const ret = {};
  const { uid, changeKey, changeRow } = ctx.request.body;
  await updateList({ uid, changeKey, changeRow })
    .then((res) => {
      ret.status = 5001;
      ret.text = "修改成功😊";
      ret.newTotal = res;
    })
    .catch((e) => {
      ret.err = e;
      ret.status = 5002;
      ret.text = "服务器错误，请重试";
    });
  ctx.body = ret;
});

module.exports = router;
