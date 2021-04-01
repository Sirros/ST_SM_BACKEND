const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const MemberModel = sequelize.define(
  "total_members",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    grade: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    attr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    take_charge: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jersey_number: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MemberModel;
