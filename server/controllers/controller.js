import Question from "../models/question.js";
import Result from "../models/result.js";
import questions, { answers } from "../database/data.js";

/*get all questions*/
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*insert all questions*/
export const insertQuestions = async (req, res) => {
  try {
    await Question.insertMany({ questions, answers }, (err, data) => {
      res.status(201).json({ msg: "Data saved successfully..." });
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*drop all questions*/
export const dropQuestions = async (req, res) => {
  try {
    await Question.deleteMany();
    res.status(200).json({ msg: "Data deleted successfully..." });
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*get all results*/
export const getResult = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*insert all results*/
export const storeResult = async (req, res) => {
  try {
    const { result, username, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Result.create(
      { result, username, attempts, points, achived },
      (err, data) => {
        res.status(201).json({ msg: "Data saved successfully..." });
      }
    );
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*drop all results*/
export const dropResult = async (req, res) => {
  try {
    await Result.deleteMany();
    res.status(200).json({ msg: "Data removed successfully..." });
  } catch (error) {
    res.status(400).json({ error });
  }
};
