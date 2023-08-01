
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Questions from "./components/questions/Questions";
import { quizData } from "./data/questions-data";
import "./App.css";

function App() {
  
  const number = getRandomInt();

  function getRandomInt() {
    const number = Math.floor(Math.random() * 5)
    return number
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: "var(--body-bg)", height: "100vh", width: "100vw" }}
    >
      <Questions questions={quizData[number].questions} quizTitle={quizData[number].topic} />
    </div>
  );
}


export default App;

