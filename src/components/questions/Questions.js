import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";
import QuizProgress from "../quizProgress/QuizProgress";
import Result from "../result/Result";

const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

function Questions({ questions, topic }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  // Update the result state
  const [result, setResult] = useState(resultInitialState);

  //Show the result state
  const [showResult, setShowResult] = useState(false);

  if (!topic) {
    return <div>Quiz topic not specified!</div>;
  }
  const selectedQuiz = questions.find(
    (quiz) => quiz.topic.toLowerCase() === topic.toLowerCase()
  );

  if (!selectedQuiz) {
    return <div>Quiz not found!</div>;
  }

  const { question, choices, correctAnswer } =
    selectedQuiz.questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    if (currentQuestion !== selectedQuiz.questions.length - 1) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    // result state update
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  return (
    <div
      className="container d-flex"
    >
      {!showResult ? (
        <>
          <QuizProgress
            questionsLength={selectedQuiz.questions.length}
            currentQuestion={currentQuestion}
            quizTitle={selectedQuiz.name}
          />
          <h2 className="quiz-question">{question}</h2>
          <ul className="quiz-choices">
            {choices.map((answer, index) => (
              <li
                key={index}
                className={answerIdx === index ? "selected" : "unselected"}
                onClick={() => onAnswerClick(answer, index)}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div>
            <Button
              onClick={() => onClickNext()}
              disabled={answerIdx === null}
              className="text-uppercase quiz-button"
              style={{
                background: "var(--primary-color)",
                color: "var(--text-primary)",
              }}
            >
              {currentQuestion === selectedQuiz.questions.length - 1
                ? "finish"
                : "next"}
            </Button>
          </div>
        </>
      ) : (
        <Result
          result={result}
          onTryAgain={onTryAgain}
          totalQuestions={selectedQuiz.questions.length}
        />
      )}
    </div>
  );
}

export default Questions;
