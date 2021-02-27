var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let MeetingSchema = new Schema({
  meetingId: {
    type: ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  participants: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rsvp: {
      type: String,
      required: true,
      enum: ["yes", "no", "maybe", "not answered"],
    },
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },

  //   timestamps: true,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meetings", MeetingSchema);
