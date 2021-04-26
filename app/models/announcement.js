const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const AnnouncementModel = sequelize.define(
  "announcements",
  {
    content: { type: DataTypes.TEXT, allowNull: false },
    post_time: { type: DataTypes.STRING, allowNull: true },
    title: { type: DataTypes.STRING, allowNull: false },
    edit_mode: { type: DataTypes.STRING, allowNull: true },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AnnouncementModel;
