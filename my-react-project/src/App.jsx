import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {questions} from './questions'



function PersonalityQuizTable({i}){

  return (
    
    <>

    <div class = "quiz-background">
      <QuestionNumber number = {questions[i].id}/>
      <Question question = {questions[i].question}/>
      <AnswerGroup answerArray = {questions[i].answers} question1 = {i}/>
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

function AnswerGroup({answerArray, question1}){



  return (
    <>
    <div class = "answer-row">
      <Answer text={answerArray[0].answer} question = {question1}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[1].answer} question = {question1}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[2].answer} question = {question1}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[3].answer} question = {question1}/>
    </div>

    

    </>
    
    
  )
}

function Answer({text, question}){

  const [questionNumber, setQuestionNumber] = useState(0);

  function handleClick()
  {
    setQuestionNumber(a => a + 1);
    question = questionNumber;
    console.log("Clicked!")
  }

  
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

    
  return <PersonalityQuizTable i = {0}/>

  
}
