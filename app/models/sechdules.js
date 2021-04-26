const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const SechduleModel = sequelize.define(
  "sechdules",
  {
    eventName: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = SechduleModel;
