import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

/*redux actions*/
import * as Action from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /*async function to fetch backend data */
    (async () => {
      try {
        /*Connecting to the database based on server hostname*/
        const [{ questions, answers }] = await getServerData(
          "http://localhost:5000/api/v1/questions",
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

          /*dispatch an action*/
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
    dispatch(Action.moveNextAction()); //increase by 1
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); //decrease by 1
  } catch (error) {
    console.log(error);
  }
};
