const moment = require("moment");

const sechduleController = require("../controllers/sechdule_controller");
const { getSechduleDetails } = sechduleController;

const getSeduleDetails = async function () {
  const map = new Map();
  const mon = [];
  const details = {};
  const totalEvent = await getSechduleDetails();

  totalEvent.forEach((i) => {
    if (!map.has(moment.unix(i.time).month() + 1)) {
      map.set(moment.unix(i.time).month() + 1, true);
    }
  });

  for (let item of map) {
    mon.unshift(item[0]);
  }

  mon.forEach((m) => {
    details[m] = {};
    details[m].eventsDay = [];
    details[m].dayDetail = {};

    totalEvent.forEach((d) => {
      const _subMon = moment.unix(d.time).month() + 1;
      const _subDay = moment.unix(d.time).date();

      if (_subMon == m) {
        details[m].eventsDay.push(_subDay);
        details[m].dayDetail[_subDay] = [
          { type: "success", content: d.eventName },
        ];
      }
    });
  });
  return {
    mon,
    details,
  };
};

module.exports = { getSeduleDetails };
