const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const SlideShowModel = sequelize.define(
  "slide_shows",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = SlideShowModel;
