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


let AnswerArrayInfo = [
  { id: 0, letter: 'A' },
  { id: 1, letter: 'B' },
  { id: 2, letter: 'C' },
  { id: 3, letter: 'D' },
  { id: 4, letter: 'E' }
];

function AnswerGroup({answerArray, handleClick}){

  const [history, setHistory] = useState([]);
  const [AnswerArray, setAnswerArray] = useState(AnswerArrayInfo);
  const navigate = useNavigate();

  //array info prints here

  function shuffleAnswers(array){
    let index = array.length;
    while(index !=0){
      let randomIndex = Math.floor(Math.random()*index);
      index--;
      let temp = array[randomIndex];
      array[randomIndex] = array[index];
      array[index] = temp;
    }

  }

  function updateArray(){
    
    shuffleAnswers(AnswerArrayInfo);
    console.log(AnswerArrayInfo);
    setAnswerArray(AnswerArrayInfo);

  }

  function updateHistory(id)
  {
    
    const historyList = [...history, {id}];
    setHistory(historyList);
    //console.log(history);
    //console.log("History worked");
    updateArray();
    console.log(AnswerArray);
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
    

  

  //shuffleAnswers(AnswerArrayInfo);

  return(
    <>
      <div class = "answer-group"> 
        <div class = "answer-row">
          <Answer text={answerArray[AnswerArray[0].id].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {AnswerArray[0].letter}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[AnswerArray[1].id].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {AnswerArray[1].letter}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[AnswerArray[2].id].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {AnswerArray[2].letter}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[AnswerArray[3].id].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {AnswerArray[3].letter}/>
        </div>

        <div class = "answer-row">
        <Answer text={answerArray[AnswerArray[4].id].answer} handleClick = {handleClick} updateHistory = {updateHistory} id = {AnswerArray[4].letter}/>
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
