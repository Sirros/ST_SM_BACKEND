const router = require("koa-router")();
const { getWelcomePageInfo } = require("../app/service/welcome");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Koa 2!",
  });
});

router.get("/stringaa", async (ctx, next) => {
  const info = await getWelcomePageInfo();
  ctx.body = info;
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
