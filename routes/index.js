const router = require("koa-router")();
const { getWelcomePageInfo } = require("../app/service/welcome_service");
const { getSeduleDetails } = require("../app/service/sechdule_service");
const { getRosterPageDate } = require("../app/service/roster_service");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Koa 2!",
  });
});

router.get("/api/getWelcomeData", async (ctx, next) => {
  const info = await getWelcomePageInfo();
  ctx.body = info;
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

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
