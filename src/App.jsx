import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import {questions} from './questions'
import { useEffect } from 'react';



function PersonalityQuizTable(){

  const [questionNumber, setQuestionNumber] = useState(0);
  

  function handleClick()
  {
    setQuestionNumber(a => a + 1);
    console.log("Clicked!!")
  }
  
  return (
    
    <>  
      <div class = "quiz-background">
        <QuestionNumber number = {questions[questionNumber].id}/>
        <Question question = {questions[questionNumber].question}/>
        <hr></hr>
        <AnswerGroup answerArray = {questions[questionNumber].answers} handleClick = {handleClick}/>
      </div>
    </>
    
    
  )

}

function QuestionNumber({number}){
  return (
    <h3 className="question-num">Question Number {number} </h3>
  );
}

function Question({question}){
  return (
    <p className="question"> {question}</p>

  );
}

function AnswerGroup({answerArray, handleClick}){

  const [history, setHistory] = useState([]);
  const navigate = useNavigate();


  function updateHistory(id)
  {
    
    const historyList = [...history, {id}];
    setHistory(historyList);
    //console.log(history);
    //console.log("History worked");
  }


  useEffect(() => {
    
    if(history.length > 10){
      
      navigate(
        '/Result', 
        {
          state:{
            history
          }
        }
      );
    }
  },[history])
    


  return(
    <>
      <div class = "answer-group"> 
        <div class = "answer-row">
          <Answer text={answerArray[0].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {'A'}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[1].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {'B'}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[2].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {'C'}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[3].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {'D'}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[4].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {'E'}/>
        </div>
      </div>
    </>
        
  )
}

function Answer({text, question, handleClick, updateHistory, id}){
  
  return(

    <>
    <button className = "answer-button" onClick ={() => 
    {handleClick();updateHistory(id);} } > 
    {text} 
    </button>
    {question}
    
    </>
    
    
  );

}


export default function App(){

    
  return <PersonalityQuizTable/>

  
}
