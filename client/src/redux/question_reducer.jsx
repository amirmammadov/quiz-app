import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
};

const questionReducer = createSlice({
  name: "question",
  initialState,
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1, //increase by 1
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1, //decrease by 1
      };
    },
    resetQuestionAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetQuestionAction,
} = questionReducer.actions;
export default questionReducer.reducer;
