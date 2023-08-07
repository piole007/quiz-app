import React, { useState, useMemo } from "react";
import { quizCardData } from "../../data/quiz-card-data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import QuizCard from "../../components/QuizCard/QuizCard.js";
import "./LandingPage.css";
import { useTheme } from "../../context/ThemeContext";

const LandingPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuizzes = useMemo(() => {
    return quizCardData.filter(
      (quiz) =>
        quiz.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    // Light/Dark mode switch
    <div
      className={`landing-page ${isDarkMode ? "dark-theme" : "light-theme"}`}
    >
      <div
        className={`${
          isDarkMode ? "dark-heading-container" : "heading-container"
        }`}
      >
        <div className="heading-container">
          <div className="toggle-switch">
            <label className="toggle-button">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="theme-checkbox"
              />
              <div className={`slider ${isDarkMode ? "dark" : "light"}`}>
                <FontAwesomeIcon icon={faSun} className="sun-icon" />
                <FontAwesomeIcon icon={faMoon} className="moon-icon" />
              </div>
            </label>
          </div>

          <h1>Get smarter with every quiz</h1>

          {/* Search Filter */}
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

        {/* Search results */}
        <div className="container landing-container mt-5">
          <div className="row centered-row pt-4">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.topic} quiz={quiz} />
            ))}
          </div>
          <div className="container mt-5 mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
