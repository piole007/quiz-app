import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Questions from "./components/questions/Questions";
import { quizData } from "./data/questions-data";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage quizData={quizData} />} />

          <Route path="/quiz/:topic" element={<QuizContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function QuizContainer() {
  const { topic } = useParams();
  return <Questions questions={quizData} topic={topic} />;
}

export default App;
