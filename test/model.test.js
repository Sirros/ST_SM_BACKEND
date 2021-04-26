const AnnouncementModel = require("../app/models/announcement");
const HonorsModel = require("../app/models/honors");
const MatchPlayersInfoModel = require("../app/models/matchPlayersInfo");
const MemberModel = require("../app/models/members");
const MomentDetailsModel = require("../app/models/momentsDetails");
const MomentTitleModel = require("../app/models/momentsTitle");
const OpponentTeamMatchInfoModel = require("../app/models/opponentTeamMatchInfo");
const OurTeamMatchInfoModel = require("../app/models/ourTeamMatchInfo");
const RulesModel = require("../app/models/rules");
const SechduleModel = require("../app/models/sechdules");
const SlideShowModel = require("../app/models/slideShow");
const TeamInfoModel = require("../app/models/teamInfo");
const UserAccountModel = require("../app/models/user_account");

test("announcement model create test", () => {
  const announcement = AnnouncementModel.build({
    content: "test content",
    post_time: 12345678,
    title: "test title",
    edit_mode: "test edit_mode",
  });

  expect(announcement.content).toBe("test content");
  expect(announcement.title).toBe("test title");
  expect(announcement.edit_mode).toBe("test edit_mode");
  expect(announcement.post_time).toBe(12345678);
});

test("honor model create test", () => {
  const honor = HonorsModel.build({
    info: "test info",
    game_type: "test game_type",
    dateTime: 123456,
  });
  expect(honor.info).toBe("test info");
  expect(honor.game_type).toBe("test game_type");
  expect(honor.dateTime).toBe(123456);
});

test("matchPlayersInfo model create test", () => {
  const matchPlayersInfo = MatchPlayersInfoModel.build({
    matchId: 10086,
    name: "test name",
    studentId: "test studentId",
    score: 10,
    rebound: 10,
    assist: 10,
    shot_time: 10,
    threepoint_time: 10,
    penalty_time: 10,
    block: 10,
    steal: 10,
    fault: 10,
    foul: 10,
    onepoint_get: 10,
    twopoint_get: 10,
    threepoint_get: 10,
  });

  expect(matchPlayersInfo.matchId).toBe(10086);
  expect(matchPlayersInfo.studentId).toBe("test studentId");
  expect(matchPlayersInfo.score).toBe(10);
  expect(matchPlayersInfo.rebound).toBe(10);
  expect(matchPlayersInfo.assist).toBe(10);
  expect(matchPlayersInfo.shot_time).toBe(10);
  expect(matchPlayersInfo.threepoint_time).toBe(10);
  expect(matchPlayersInfo.penalty_time).toBe(10);
  expect(matchPlayersInfo.block).toBe(10);
  expect(matchPlayersInfo.steal).toBe(10);
  expect(matchPlayersInfo.fault).toBe(10);
  expect(matchPlayersInfo.foul).toBe(10);
  expect(matchPlayersInfo.onepoint_get).toBe(10);
  expect(matchPlayersInfo.twopoint_get).toBe(10);
  expect(matchPlayersInfo.threepoint_get).toBe(10);
});

test("members model create test", () => {
  const members = MemberModel.build({
    name: "test name",
    studentId: 2017141463192,
    grade: 2017,
    attr: "test attr",
    charge: "test charge",
    remark: "test remark",
    weight: 90.2,
    height: 182.1,
    avatar: "test avatar",
    jersey_number: 0,
    em: "test em",
    phone: "test phone",
    birthday: "test birthday",
    area: "test area",
    signature: "test signature",
    key: "test key",
    type: "test type",
    password: "test password",
  });

  expect(members.name).toBe("test name");
  expect(members.studentId).toBe(2017141463192);
  expect(members.grade).toBe(2017);
  expect(members.attr).toBe("test attr");
  expect(members.charge).toBe("test charge");
  expect(members.weight).toBe(90.2);
  expect(members.height).toBe(182.1);
  expect(members.avatar).toBe("test avatar");
  expect(members.jersey_number).toBe(0);
  expect(members.em).toBe("test em");
  expect(members.phone).toBe("test phone");
  expect(members.birthday).toBe("test birthday");
  expect(members.area).toBe("test area");
  expect(members.signature).toBe("test signature");
  expect(members.key).toBe("test key");
  expect(members.type).toBe("test type");
  expect(members.password).toBe("test password");
});

test("momentsDetails model create test", () => {
  const momentDetails = MomentDetailsModel.build({
    poster: "test lzb",
    url: "test url",
    _momentId: 10088,
  });

  expect(momentDetails.poster).toBe("test lzb");
  expect(momentDetails.url).toBe("test url");
  expect(momentDetails._momentId).toBe(10088);
});

test("momentsTitle model create test", () => {
  const momentTitle = MomentTitleModel.build({
    title: "test title",
    creator: "test creator",
    momentId: 10089,
    createTime: 123456789,
  });

  expect(momentTitle.title).toBe("test title");
  expect(momentTitle.creator).toBe("test creator");
  expect(momentTitle.momentId).toBe(10089);
  expect(momentTitle.createTime).toBe(123456789);
});

test("opponentTeamMatchInfo model create test", () => {
  const oppo = OpponentTeamMatchInfoModel.build({
    matchId: 10090,
    ST: "test ST",
    ND: "test ND",
    RD: "test RD",
    TH: "test TH",
    team: "test team",
  });

  expect(oppo.matchId).toBe(10090);
  expect(oppo.ST).toBe("test ST");
  expect(oppo.ND).toBe("test ND");
  expect(oppo.RD).toBe("test RD");
  expect(oppo.TH).toBe("test TH");
  expect(oppo.team).toBe("test team");
});

test("outTeamMatchInfo model create test", () => {
  const our = OpponentTeamMatchInfoModel.build({
    matchId: 10091,
    ST: "test ST",
    ND: "test ND",
    RD: "test RD",
    TH: "test TH",
    team: "test team",
  });

  expect(our.matchId).toBe(10091);
  expect(our.ST).toBe("test ST");
  expect(our.ND).toBe("test ND");
  expect(our.RD).toBe("test RD");
  expect(our.TH).toBe("test TH");
  expect(our.team).toBe("test team");
});

test("rules model create test", () => {
  const rule = RulesModel.build({
    item: "test rule",
  });

  expect(rule.item).toBe("test rule");
});

test("sechdules model create test", () => {
  const sechdules = SechduleModel.build({
    eventName: "test event",
    time: "test time",
  });

  expect(sechdules.eventName).toBe("test event");
  expect(sechdules.time).toBe("test time");
});

test("slideShow model create test", () => {
  const slideShow = SlideShowModel.build({
    url: "test url",
  });

  expect(slideShow.url).toBe("test url");
});

test("teaminfo model create tests", () => {
  const teamInfo = TeamInfoModel.build({
    title: "test title",
    comingMatch: 123,
    discription: "test discription",
    expenditure: 100,
    logoUrl: "test logoUrl",
    weather: "test weather",
    groupChat: "test groupChat",
    teamAttr: "test teamAttr",
    department: "test department",
    HeadofDep: "test HeadofDep",
  });

  expect(teamInfo.title).toBe("test title");
  expect(teamInfo.comingMatch).toBe(123);
  expect(teamInfo.discription).toBe("test discription");
  expect(teamInfo.expenditure).toBe(100);
  expect(teamInfo.logoUrl).toBe("test logoUrl");
  expect(teamInfo.weather).toBe("test weather");
  expect(teamInfo.groupChat).toBe("test groupChat");
  expect(teamInfo.teamAttr).toBe("test teamAttr");
  expect(teamInfo.department).toBe("test department");
  expect(teamInfo.HeadofDep).toBe("test HeadofDep");
});

test("user_account model create test", () => {
  const users = UserAccountModel.build({
    userName: "test userName",
    password: "test password",
    type: "test type",
    userid: "test userid",
    name: "test name",
    avatar: "test avatar",
  });

  expect(users.userName).toBe("test userName");
  expect(users.password).toBe("test password");
  expect(users.type).toBe("test type");
  expect(users.userid).toBe("test userid");
  expect(users.name).toBe("test name");
  expect(users.avatar).toBe("test avatar");
});
