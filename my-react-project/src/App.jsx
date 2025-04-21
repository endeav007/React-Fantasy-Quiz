import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {questions} from './questions'



function PersonalityQuizTable(){

  const [questionNumber, setQuestionNumber] = useState(0);

  function handleClick()
  {
    setQuestionNumber(a => a + 1);
    console.log("Clicked!")
  }
  

  return (
    
    <>
    
    <div class = "quiz-background">
      <QuestionNumber number = {questions[questionNumber].id}/>
      <Question question = {questions[questionNumber].question}/>
      <AnswerGroup answerArray = {questions[questionNumber].answers} handleClick = {handleClick}/>
    </div>
    
    </>
    
    
  )

}

function QuestionNumber({number}){
  return (
    <h3>Question Number {number} </h3>
  );
}

function Question({question}){
  return (
    <h1> {question}</h1>

  );
}

function AnswerGroup({answerArray, handleClick}){

  return (
    <>
    <div class = "answer-row">
      <Answer text={answerArray[0].answer} handleClick = {handleClick}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[1].answer} handleClick = {handleClick} />
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[2].answer} handleClick = {handleClick}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[3].answer} handleClick = {handleClick}/>
    </div>


    </>
    
    
  )
}

function Answer({text, question, handleClick}){

  return(

    <>
    <button className = "answer-button" onClick ={() => 
    {handleClick();} } > 
    {text} 
    </button>
    {question}
    
    
    </>
    
  );

}


export default function App(){

    
  return <PersonalityQuizTable/>

  
}
