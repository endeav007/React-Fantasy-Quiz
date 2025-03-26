import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function PersonalityQuizTable(){

  return (
    <div class = "quiz-background">
      <QuestionNumber />
      <Question />
      <AnswerGroup />
    </div>
    
  )

}

function QuestionNumber(){
  return (
    <h3>Question Number x</h3>
  );
}

function Question(){
  return (
    <h1> The text for our question</h1>

  );
}

function AnswerGroup(){

  return (
    <>
    <div class = "answer-row">
      <Answer text="Question 1"/>
    </div>

    <div class = "answer-row">
      <Answer text="Question 2"/>
    </div>

    <div class = "answer-row">
      <Answer text="Question 3"/>
    </div>

    <div class = "answer-row">
      <Answer text="Question 4"/>
    </div>

    </>
    
  )
}

function Answer({text}){
  return(
    <button className = "answer-button"> {text} </button>
  );

}

export default function App(){
  return <PersonalityQuizTable/>
}
