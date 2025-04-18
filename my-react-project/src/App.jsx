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
      <AnswerGroup answerArray = {questions[i].answers} index = {i}/>
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

function AnswerGroup({answerArray}){



  return (
    <>
    <div class = "answer-row">
      <Answer text={answerArray[0].answer}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[1].answer} />
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[2].answer} />
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[3].answer} />
    </div>

    </>
    
  )
}

function Answer({text}){

  

  function handleClick()
  {
    curr_index++;
    console.log("Clicked!")
  }

  
  return(
    <button className = "answer-button" onClick = {handleClick}> 
    {text} 
    </button>
  );

}

function NextQuestion(index)
{
  return index++;
}

export default function App(){

  const 

  
    
  return <PersonalityQuizTable i = {1}/>


  
}
