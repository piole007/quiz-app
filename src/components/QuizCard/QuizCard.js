import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.css";

const QuizCard = ({ quiz }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={quiz.image} className="card-img-top" alt={quiz.name} />
        <div className="card-body">
          <h5 className="card-title">{quiz.name}</h5>
          <p className="card-text">{quiz.description}</p>

          <Link to={`/quiz/${quiz.topic}`} className="btn btn-primary">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
