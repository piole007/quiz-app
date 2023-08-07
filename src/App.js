import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Questions from "./components/questions/Questions";
import { quizData } from "./data/questions-data";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage quizData={quizData} />} />

            <Route path="/quiz/:topic" element={<QuizContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

function QuizContainer() {
  const { topic } = useParams();
  return <Questions questions={quizData} topic={topic} />;
}

export default App;
