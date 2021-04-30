const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const ConsumerLog = sequelize.define(
  "consumer_log",
  {
    money: { type: DataTypes.STRING, allowNull: false },
    purpose: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = ConsumerLog;
