const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const AnnouncementModel = sequelize.define(
  "announcements",
  {
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AnnouncementModel;
