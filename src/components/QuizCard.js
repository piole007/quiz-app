import React from "react";

const QuizCard = ({ quiz }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={quiz.image} className="card-img-top" alt={quiz.topic} />
        <div className="card-body">
          <h5 className="card-title">{quiz.topic}</h5>
          <p className="card-text">{quiz.description}</p>

          {/* TODO: link the quizzes */}
          {/* <a href="#" className="btn btn-primary">
            Start Quiz
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
