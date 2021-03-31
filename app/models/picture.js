const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const PictureModel = sequelize.define(
  "pictures",
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = PictureModel;
