import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

import { API_URL } from "../constant/index";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    await dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("Couldn't get Result");
      await postServerData(
        `${API_URL}/api/v1/results`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
