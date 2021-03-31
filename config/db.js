const Sequelize = require("sequelize");
const config = require("./db_config");

console.log("init sequelize...");

// 实例化 sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host, // db 地址
    dialect: "mysql", // 连接 db 类型
    pool: {
      // 连接池
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: (log) => {
      console.log(log);
    },
    query: { raw: true },
  }
);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("******连接成功😊********");
//     console.log("******测试结束，即将退出！！！********");
//     process.exit(); //结束进程
//   })
//   .catch((err) => {
//     console.error(
//       "***************Unable to connect to the database:***********",
//       err
//     );
//   });

module.exports = { sequelize };
