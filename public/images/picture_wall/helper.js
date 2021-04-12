/*
 * 文件重命名
 */
const fs = require("fs");
const path = require("path");
const _path = "/2017年照片";

// function renameFile(dir) {
//   const files = fs.readdirSync(dir);
//   for (let i = 0; i < files.length; i++) {
//     fs.readFile(path.join(__dirname, _path, files[i]), function (err, file) {
//       const extname = files[i].split(".")[1];
//       fs.rename(
//         `${path.join(__dirname, _path)}/${files[i]}`,
//         `${path.join(__dirname, _path)}/2017_${i + 1}.${extname}`,
//         (err) => {
//           console.error(err);
//         }
//       );
//     });
//   }
// }
// renameFile(path.join(__dirname, _path));

const MomentDetailsModel = require("../../../app/models/momentsDetails");

const files = fs.readdirSync(path.join(__dirname, _path));
const prePath = "/images/picture_wall/2017年照片/";
const poster = "林子博";
const _momentId = 4003;

const arr = [];
files.forEach((f) => {
  arr.push({ poster, _momentId, url: `${prePath}${f}` });
});

(async () => {
  await MomentDetailsModel.bulkCreate(arr);
})();
