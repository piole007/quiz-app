import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Questions from "./components/questions/Questions";
import { quizData } from "./data/questions-data";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  function getRandomInt() {
    return Math.floor(Math.random() * 5);
  }

  return (
    <div>
      <LandingPage />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "var(--body-bg)",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Questions questions={quizData[getRandomInt()].questions} />
      </div>
    </div>
  );
}

export default App;
