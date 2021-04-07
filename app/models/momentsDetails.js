const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const MomentDetailsModel = sequelize.define(
  "moments_details",
  {
    postor: { type: DataTypes.STRING, allowNull: true },
    url: { type: DataTypes.STRING, allowNull: false },
    _momentId: { type: DataTypes.NUMBER, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MomentDetailsModel;
