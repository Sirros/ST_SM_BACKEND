const router = require("koa-router")();
const { getWelcomePageInfo } = require("../app/service/welcome_service");
const { getSeduleDetails } = require("../app/service/sechdule_service");
const { getRosterPageDate } = require("../app/service/roster_service");
const { getMatchInfo } = require("../app/service/match_info_service");
const {
  getFileList,
  addFile,
  savePicture,
} = require("../app/service/moments_service");
const {
  retHonorList,
  createItem,
  updateItem,
} = require("../app/service/honor_service");
const {
  getTotalList,
  updateList,
  addUser,
  deleteUser,
} = require("../app/service/sub_roster_service");
const { insertMainFunc } = require("../app/service/sub_dataResult_service");
const {
  sendTeamInfo,
  updateResult,
} = require("../app/service/team_infos_service");
const {
  sendSaveAnnouncementStatus,
  sendSaveSechduleStatus,
} = require("../app/service/announcement_service");

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

router.post("/api/addUser", async (ctx, next) => {
  const ret = {};
  const {
    name,
    studentId,
    grade,
    key,
    attr,
    charge,
    height,
    weight,
    jersey_number,
    em,
    phone,
    remark,
    area,
  } = ctx.request.body;
  console.log(name, studentId);
  await addUser({
    name,
    studentId,
    grade,
    key,
    attr,
    charge,
    height,
    weight,
    jersey_number,
    em,
    phone,
    remark,
    area,
  })
    .then((res) => {
      ret.addResult = res;
      ret.status = 5001;
      ret.status = "添加成功😊";
    })
    .catch((err) => {
      ret.status = 5002;
      ret.status = "添加失败";
      ret.error = err;
    });
  ctx.body = ret;
});

router.post("/api/deleteUser", async (ctx, next) => {
  const ret = {};
  await deleteUser({ uid: ctx.request.body.uid })
    .then((res) => {
      ret.status = 5001;
      ret.text = "删除成功😊";
      ret.newList = res;
    })
    .catch((err) => {
      ret.status = 5002;
      ret.status = "删除失败";
      ret.error = err;
    });
  ctx.body = ret;
});

router.post("/api/postMatchTotalInfo", async (ctx, next) => {
  const ret = {};
  const { matchDetail, matchInfo } = ctx.request.body;
  await insertMainFunc(matchDetail, matchInfo)
    .then((res) => {
      ret.status = 5001;
      ret.text = "录入成功😊";
    })
    .catch((err) => {
      ret.status = 5002;
      ret.text = "录入失败";
      ret.error = err;
    });
  ctx.body = ret;
});

router.get("/api/getTeamInfo", async (ctx, next) => {
  let ret = {};
  await sendTeamInfo()
    .then((res) => {
      ret = res;
    })
    .catch((err) => {
      ret.error = err;
      ret.status = 9001;
      ret.text = "获取失败";
    });
  ctx.body = ret;
});

router.post("/api/updateTeamInfo", async (ctx, next) => {
  let ret = {};
  await updateResult(ctx.request.body)
    .then((res) => {
      ret = res;
      ret.status = 9000;
    })
    .catch((err) => {
      ret.error = err;
      ret.status = 9001;
      ret.text = "更新失败";
    });
  ctx.body = ret;
});

router.post("/api/postPicture", async (ctx, next) => {
  let ret = {};
  try {
    await savePicture(ctx.request.body)
      .then((result) => {
        ret = result;
        ret.status = 9000;
        ret.text = "图片添加成功";
      })
      .catch((err) => {
        ret.error = err;
        ret.status = 9001;
        ret.text = "图片添加失败";
      });
    ctx.body = ret;
  } catch (error) {
    console.error(error);
  }
});

router.post("/api/postAnnData", async (ctx, next) => {
  let ret = {};
  const { eventType } = ctx.request.body;
  if (eventType === "daily") {
    await sendSaveAnnouncementStatus(ctx.request.body)
      .then((res) => {
        ret.status = 9000;
        ret.text = "发布日常公告成功😊";
      })
      .catch((err) => {
        ret.error = err;
        ret.status = 9001;
        ret.text = "发布日常公告失败";
      });
  } else {
    await sendSaveSechduleStatus(ctx.request.body)
      .then((res) => {
        ret.status = 9000;
        ret.text = "更新日程表成功😊";
      })
      .catch((err) => {
        ret.error = err;
        ret.status = 9001;
        ret.text = "更新日程表公告失败";
      });
  }
  ctx.body = ret;
});

module.exports = router;
