const router = require("koa-router")();

// router.prefix("/node/api");

router.get("/", function (ctx, next) {
  ctx.body = "this is /node/api";
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.post("/api/login/account", function (ctx, next) {
  const { userName, password, selectedUser } = ctx.request.body;
  console.log(userName, password);
  const ret = {};
  ret.currentAuthority = selectedUser;
  if (userName === "root" && password === "123456") {
    ret.status = "ok";
  } else {
    ret.status = "error";
  }
  ctx.body = ret;
});

router.get("/api/currentUser", function (ctx, next) {
  ctx.body = {
    name: "林子博",
    avatar:
      "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
    userid: "00000001",
    email: "antdesign@alipay.com",
    signature: "海纳百川，有容乃大",
    title: "17级篮球队队长",
    group: "四川大学-软件学院",
    notifyCount: 12,
    unreadCount: 11,
    country: "China",
    geographic: {
      province: {
        label: "浙江省",
        key: "330000",
      },
      city: {
        label: "杭州市",
        key: "330100",
      },
    },
    address: "西湖区工专路 77 号",
    phone: "13032867907",
  };
});

module.exports = router;
