import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";
import QuizProgress from "../quizProgress/QuizProgress";

function Questions({ questions, quizTitle }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(Number);
  const [answer, setAnswer] = useState(null);
  const { question, choices, correctAnswer } = questions[currentQuestion];

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
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((setCurrentQuestion) => setCurrentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <QuizProgress questionsLength={questions.length} currentQuestion={currentQuestion} quizTitle={quizTitle} />
      <h2>{question}</h2>
      <div className="quiz-choices">
        <ul>
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
      </div>

      <div>
        <Button
          onClick={() => onClickNext()}
          disabled={answerIdx === null}
          className="quiz-button text-uppercase"
        >
          {currentQuestion === questions.length - 1 ? "finish" : "next"}
        </Button>
      </div>
    </div>
  );
}

export default Questions;
