import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempts_Number(result) {
  return result.map((r) => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, total) => prev + total, 0);
}

export function flagResult(totalPoints, earnPoints) {
  return earnPoints > (totalPoints * 50) / 100;
}

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

export const getServerData = async (url, callback) => {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
};

export const postServerData = async (url, result, callback) => {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
};
