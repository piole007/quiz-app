import React, { useState, useMemo } from "react";
import { quizCardData } from "../data/quiz-card-data";
import QuizCard from "./QuizCard";
import "../reusableComponents/Heading.css";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuizzes = useMemo(() => {
    return quizCardData.filter(
      (quiz) =>
        quiz.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <div className="heading-container">
        <h1 className="display-4">Get smarter with every quiz</h1>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4" />
        <div className="row">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.topic} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
