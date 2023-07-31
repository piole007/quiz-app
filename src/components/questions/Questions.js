import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";

function Questions({ questions }) {
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
    <div
      className="container d-flex flex-column justify-content-center "
      style={{ background: "var(--container-bg)" }}
    >
      <div className="quiz-progress">
        {currentQuestion + 1}/{questions.length}
      </div>
      <h2>{question}</h2>
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
          className=" text-uppercase"
          style={{
            background: "var(--primary-color)",
            color: "var(--text-primary)",
          }}
        >
          {currentQuestion === questions.length - 1 ? "finish" : "next"}
        </Button>
      </div>
    </div>
  );
}

export default Questions;
