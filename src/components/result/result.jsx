import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./result.css";



const Result = ({ totalQuestions, result, onTryAgain}) => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goToHomePage = () => {
    navigate('/');
  };


    return (
      <div className="result-container">
          <div className="result-card">
            <h3>Your result!</h3>
            <p>
              Total Questions: <span> {totalQuestions} </span>
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
          
            <div className="resultButtons">
              <button onClick={onTryAgain}>Try Again!</button>
              <button onClick={goToHomePage}>Home Page</button>
            </div>
          </div>
      </div>
    )
  };

  export default Result;


  
  