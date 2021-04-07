const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;
const MomentTitleModel = require("./momentsTitle");

const MomentDetailsModel = sequelize.define(
  "picList",
  {
    poster: { type: DataTypes.STRING, allowNull: true },
    url: { type: DataTypes.STRING, allowNull: false },
    _momentId: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "moments_details",
  }
);

// detail: _momentId -> title: momentId
MomentTitleModel.hasMany(MomentDetailsModel, {
  foreignKey: "_momentId",
  as: "picList",
});

module.exports = MomentDetailsModel;
