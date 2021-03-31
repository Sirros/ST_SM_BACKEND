const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const RulesModel = sequelize.define(
  "rules",
  {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = RulesModel;
