import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";

const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Brainy Application</h1>

      <div className="introduction">
        Welcome to the Web Dev Quiz! 5 questions, 3 choices each. Pick one for
        10 points each. Review and change answers before the end. Results
        revealed at completion. Good luck!
      </div>

      <form id="form">
        <input
          ref={inputRef}
          type="text"
          className="userid"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default Main;
