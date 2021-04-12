/**
 * 获取moment 2021.04.07
 */
const fs = require("fs");
const MomentTitleModel = require("../models/momentsTitle");
const MomentDetailsModel = require("../models/momentsDetails");

const getFile = async function () {
  const data = await MomentTitleModel.findAndCountAll({
    include: [
      {
        model: MomentDetailsModel,
        as: "picList",
        attributes: ["url", "id"],
      },
    ],
  });
  return { data };
};

const insertTitle = async function (params) {
  return MomentTitleModel.create(params);
};

const addList = async function (params) {
  const { picture_list = [], target_folder } = params;
  const arr = [];
  const prePath = `/images/picture_wall/${target_folder}`;
  const uid = await MomentTitleModel.findOne({
    where: {
      title: target_folder,
    },
    attributes: ["momentId"],
  });

  // 保存图片到本地
  picture_list &&
    picture_list.forEach((p) => {
      arr.push({
        poster: "林子博",
        url: `${prePath}/${p.name}`,
        _momentId: uid.dataValues.momentId,
      });
      if (p.b64) {
        const base64Data = p.b64.replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer = Buffer.from(base64Data, "base64");
        fs.writeFile(
          `./public/images/picture_wall/${target_folder}/${p.name}`,
          dataBuffer,
          function (err) {
            return err;
          }
        );
      }
    });
  // 保存路径到数据库
  await MomentDetailsModel.bulkCreate(arr);
  const ret = {};
  ret.title = target_folder;
  ret.momentId = uid.dataValues.momentId;
  ret.creator = "林子博";
  ret.picList = [];
  const tempList = await MomentDetailsModel.findAll({
    where: {
      _momentId: uid.dataValues.momentId,
    },
  });
  tempList.forEach((t) => {
    ret.picList.push({ url: t.dataValues.url, id: t.dataValues.id });
  });
  return ret;
};

module.exports = { getFile, insertTitle, addList };
