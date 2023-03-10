import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  result: {
    type: Array,
    default: [],
  },
  username: {
    type: String,
  },
  attempts: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  achived: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
