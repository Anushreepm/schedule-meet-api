module.exports = function (app) {
  const meetingList = require("../controllers/schedulingController");

  //meeting scheduling route

  app.route("/meetings").post(meetingList.schedule_meet);

  app.route("/meeting/:meetingId").get(meetingList.display_meet);

  app
    .route("/meetings?start=:startTime&end=:endTime")
    .get(meetingList.display_all_meetings);

  app
    .route("/meetings?participant=:email")
    .get(meetingList.display_participant_meetings);
};
