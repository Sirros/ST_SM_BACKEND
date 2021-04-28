const router = require("koa-router")();
const MemberModel = require("../app/models/members");
const UserAccountModel = require("../app/models/user_account");

const sendEmail = require("../utils/sendEmail");

// router.prefix("/node/api"); // 路由公共前缀

let _LOGIN_USER = {};
const check = {};

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

      if (
        password == checkUser.dataValues.password &&
        selectedUser === checkUser.dataValues.type
      ) {
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

router.post("/api/sendCode", async function (ctx, next) {
  const { targetEM: email, targetID: studentId } = ctx.request.body;
  let code = "";

  for (let i = 1; i <= 6; i++) {
    const num = Math.floor(Math.random() * 10);
    code += num;
  }

  check["id"] = studentId;
  check["email"] = email;
  check["code"] = code;

  if (!email) {
    ctx.text = "邮箱有误";
  }
  async function timeout() {
    return new Promise((resolve, reject) => {
      sendEmail.sendMail(email, code, (state) => {
        resolve(state);
      });
    });
  }
  await timeout().then((state) => {
    if (state) {
      ctx.body = "发送验证码成功";
    } else {
      ctx.body = "发送验证码失败";
    }
  });
});

router.post("/api/resetPassword", async function (ctx, next) {
  console.log(check);
  const ret = {};
  const {
    studentId,
    email,
    code1,
    code2,
    code3,
    code4,
    code5,
    code6,
    newPSW,
  } = ctx.request.body;

  const code = code1 + code2 + code3 + code4 + code5 + code6;
  if (studentId === check.id && email === check.email && code === check.code) {
    console.log("核对通过，可以修改");
    await MemberModel.update(
      {
        password: newPSW,
      },
      {
        where: {
          studentId: studentId,
        },
      }
    )
      .then((res) => {
        (ret.text = "修改成功"), (ret.status = 10000);
      })
      .catch((err) => {
        console.error(err);
        (ret.text = "修改失败"), (ret.status = 10001);
        ret.error = err;
      });
  }
  ctx.body = ret;
});

module.exports = router;
