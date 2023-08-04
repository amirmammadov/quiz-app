import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

import * as Action from "../redux/question_reducer";

import { API_URL } from "../constant/index";

export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${API_URL}/api/v1/questions`,
          (data) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
          }));
          setGetData((prev) => ({
            ...prev,
            apiData: questions,
          }));

          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
        }));
        setGetData((prev) => ({
          ...prev,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
