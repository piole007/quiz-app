import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Questions = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const { question, choices, correctAnswer } = questions[currentQuestion];

  // doesn't work right
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    console.log(index);
    console.log(answerIdx);
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
            onClick={() => onAnswerClick(answer, index)}
            key={answer}
            className={answerIdx === index ? "selected-answer" : null}
          >
            {answer}
          </li>
        ))}
      </ul>
      <div>
        <Button
          onClick={() => onClickNext}
          disabled={answerIdx === null}
          className=" text-uppercase"
          style={{
            background: "var(--primary-color)",
            color: "var(--text-primary)",
          }}
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "next"}
        </Button>
      </div>
    </div>
  );
};

export default Questions;
