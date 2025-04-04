import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {questions} from './questions'



function PersonalityQuizTable(){

  return (
    
    <>

    <div class = "quiz-background">
      <QuestionNumber number = {questions[index].id}/>
      <Question question = {questions[index].question}/>
      <AnswerGroup answerArray = {questions[index].answers}/>
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

function AnswerGroup({answerArray, index}){

  function handleClick(){
    
    index+=1
      
  }

  return (
    <>
    <div class = "answer-row">
      <Answer text={answerArray[0].answer} onAnswerClick = {() =>handleClick()}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[1].answer} onAnswerClick = {() =>handleClick()}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[2].answer} onAnswerClick = {() =>handleClick()}/>
    </div>

    <div class = "answer-row">
    <Answer text={answerArray[3].answer} onAnswerClick = {() =>handleClick()}/>
    </div>

    </>
    
  )
}

function Answer({text, onAnswerClick}){
  return(
    <button className = "answer-button" onClick = {onAnswerClick}> 
    {text} 
    </button>
  );

}

export default function App(){
  
  return <PersonalityQuizTable index = {0}/>
}
