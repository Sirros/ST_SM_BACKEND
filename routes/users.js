const router = require("koa-router")();
const MemberModel = require("../app/models/members");
const UserAccountModel = require("../app/models/user_account");

// (async () => {
//   const checkUser = await MemberModel.findOne({
//     where: { studentId: 2017141463192 },
//   });
//   console.log(checkUser.dataValues);
// })();

// router.prefix("/node/api"); // 路由公共前缀

let _LOGIN_USER = {};

router.post("/api/login/account", async function (ctx, next) {
  const ret = {};
  const { userName, password, selectedUser } = ctx.request.body;

  if (selectedUser !== "admin") {
    const checkUser = await MemberModel.findOne({
      where: { studentId: userName },
    });
    if (checkUser && checkUser.dataValues) {
      _LOGIN_USER = {};
      _LOGIN_USER = checkUser.dataValues;
      _LOGIN_USER.userid = checkUser.dataValues.studentId;
      // _LOGIN_USER.uid = checkUser.dataValues.studentId;

      if (password == checkUser.dataValues.password) {
        ret.currentAuthority = selectedUser;
        ret.status = "ok";
      } else {
        ret.status = "error";
        ret.text = "用户名或密码错误，请重试...";
      }
    } else {
      ret.status = "error";
      ret.text = "用户不存在";
    }
  } else {
    const checkAdmin = await UserAccountModel.findOne({
      where: {
        userName: userName,
      },
    });
    if (checkAdmin && checkAdmin.dataValues) {
      _LOGIN_USER = {};
      _LOGIN_USER = checkAdmin.dataValues;
      _LOGIN_USER.userid = checkAdmin.dataValues.userName;
      // _LOGIN_USER.uid = checkAdmin.dataValues.userName;

      if (password == checkAdmin.password) {
        ret.currentAuthority = selectedUser;
        ret.status = "ok";
      } else {
        ret.status = "error";
        ret.text = "管理员账号或密码错误，请重试...";
      }
    } else {
      ret.status = "error";
      ret.text = "管理员不存在";
    }
  }
  ctx.body = ret;
});

router.get("/api/currentUser", function (ctx, next) {
  ctx.body = _LOGIN_USER;
});

router.get("/api/getUserInfo", function (ctx, next) {
  let temp = { ..._LOGIN_USER };
  delete temp.userid;
  ctx.body = temp;
});

module.exports = router;
