const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;
const MomentDetailsModel = require("./momentsDetails");

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

MomentTitleModel.hasMany(MomentDetailsModel, {
  foreignKey: "_momentId",
  sourceKey: "momentId",
});

MomentDetailsModel.belongsTo(MomentTitleModel, {
  foreignKey: "_momentId",
  targetKey: "momentId",
});

module.exports = MomentTitleModel;
