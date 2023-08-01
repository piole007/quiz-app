import React from 'react'
import  './QuizProgress.css'

const QuizProgress = ({questionsLength, currentQuestion, quizTitle}) => {
  return (
    <div className='container-sm d-flex justify-content-center flex-column'>
        <h2 className='quiz-progress-title'>Quiz progress</h2>
        <p>You are solwing {quizTitle}</p>
        <div className='progress-box'>
        <p> You solved {currentQuestion +1} question out of {questionsLength}</p>
        </div>
        
    </div>
  )
}

export default QuizProgress