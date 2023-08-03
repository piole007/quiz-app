import React from "react";
import "./QuizProgress.css";
// import { useState } from "react";

const QuizProgress = ({ questionsLength, currentQuestion, quizTitle }) => {
  // const [time, setTime] = useState(30);
  // const [isResult, setIsResult] = useState(false);

  return (
    <div className="main-box">
      <h2 className="quiz-progress-title">Quiz progress</h2>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <p className="progress-detail">You are solwing {quizTitle}</p>
        <div className="progress-bottom d-flex justify-content-center align-items-center flex-column">
          <div
            className="progress-circle d-flex justify-content-center align-items-center"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              "--value": ((currentQuestion + 1) / questionsLength) * 100,
            }}
          >
            <div className="progress-big">{currentQuestion + 1}</div>
            <div className="progress-mini">/{questionsLength}</div>
          </div>
          <p className="progress-detail">
            You solve the {currentQuestion + 1}. question out of a total of{" "}
            {questionsLength} questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizProgress;
