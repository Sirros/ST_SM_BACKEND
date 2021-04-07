const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const MomentTitleModel = sequelize.define(
  "moments_title",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    creator: { type: DataTypes.STRING, allowNull: false },
    momentId: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
    createdAt: { type: DataTypes.NUMBER, allowNull: true },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MomentTitleModel;
