const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db").sequelize;

const MemberModel = sequelize.define(
  "total_members",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    studentId: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
    grade: { type: DataTypes.NUMBER, allowNull: false },
    attr: { type: DataTypes.STRING, allowNull: true },
    charge: { type: DataTypes.STRING, allowNull: true },
    remark: { type: DataTypes.STRING, allowNull: true },
    weight: { type: DataTypes.FLOAT, allowNull: true },
    height: { type: DataTypes.FLOAT, allowNull: true },
    avatar: { type: DataTypes.STRING, allowNull: true },
    jersey_number: { type: DataTypes.NUMBER, allowNull: true },
    em: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    birthday: { type: DataTypes.STRING, allowNull: true },
    area: { type: DataTypes.STRING, allowNull: true },
    signature: { type: DataTypes.STRING, allowNull: true },
    key: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MemberModel;
