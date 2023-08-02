import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";
import QuizProgress from "../quizProgress/QuizProgress";

const resultInitialState = {
       score: 0,
       correctAnswers: 0,
       wrongAnswers: 0
   }
  

function Questions({ questions, quizTitle }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(Number);
  const [answer, setAnswer] = useState(null);
  const { question, choices, correctAnswer } = questions[currentQuestion];

  // Update the result state
  const [result, setResult] = useState(resultInitialState);

  //Show the result state
  const [showResult, setShowResult] = useState(false);

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
      setShowResult(true);
    } 
    
// result state update
    setResult((prev) => 
      answer
      ? {
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,

      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }
    );
   
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  }

  return (
    <div
      className="container d-flex flex-column justify-content-center "
      style={{ background: "var(--container-bg)" }}
    >
      {!showResult ? (<>
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
      </>
      ) : <div className="result-container"> 
        <div className="result-card">
          <h3>
            Your result!
          </h3>
          <p>
            Total Questions: <span> {questions.length} </span>
          </p>
          <p>
            Total Score: <span> {result.score} </span>
          </p>
          <p>
            Correct Answers: <span> {result.correctAnswers} </span>
          </p>
          <p>
            Wrong Answers: <span> {result.wrongAnswers} </span>
          </p>
          <button onClick={onTryAgain}>Try Again!</button>
        </div>
      </div>}
      
      
    </div>
  );
}

export default Questions;
