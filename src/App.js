
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Questions from "./components/questions/Questions";
import { quizData } from "./data/questions-data";
import "./App.css";

function App() {
  function getRandomInt() {
    return Math.floor(Math.random() * 5);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: "var(--body-bg)", height: "100vh", width: "100vw" }}
    >
      <Questions questions={quizData[getRandomInt()].questions} />
    </div>
  );
}


export default App;

