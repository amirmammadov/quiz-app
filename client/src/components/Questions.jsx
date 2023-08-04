import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();

  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  };

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((option, i) => (
          <li key={i}>
            <input
              value={true}
              type="radio"
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {option}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
