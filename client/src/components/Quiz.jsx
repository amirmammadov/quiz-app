import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

/*questions actions*/
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
/*result actions*/
import { PushAnswer } from "../hooks/setResult";

const Quiz = () => {
  const [checked, setChecked] = useState(undefined);

  //Get values from redux store
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  /*previous event handler*/
  const onPrev = () => {
    if (trace > 0) {
      /*decrease trace value by one using MovePrevAction*/
      dispatch(MovePrevQuestion());
    }
  };

  /*next event handler*/
  const onNext = () => {
    if (trace < queue.length) {
      /*increase trace value by one using MoveNextAction*/
      dispatch(MoveNextQuestion());

      /*insert a new result in the array*/
      if (result.length <= trace) {
        dispatch(PushAnswer(checked));
      }
    }

    /*reset the value of the checked variable*/
    setChecked(undefined);
  };

  //Call this function from the Question component to store id of the option
  const onChecked = (checked) => {
    setChecked(checked);
  };

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/*display questions*/}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
