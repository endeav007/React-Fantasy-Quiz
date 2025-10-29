import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import {results} from './results'


function ResultPage(){
    return(
        <div className="quiz-background">
            <Text />
        </div>
    )
}

function Text(){
    const {state} = useLocation();
    const {history} = state || {}
    console.log(history);
    //array to store amount of each variable
    const values = [0, 0, 0, 0, 0];

    for(let i = 0; i < 10; i++){
        
        switch(history[i].id){
            case "A":
                values[0]++;
                break;
            case "B":
                values[1]++;
                break;
            case 'C':
                values[2]++;
                break;
            case 'D':
                values[3]++;
                break;
            case 'E':
                values[4]++;
                break;
            default:
                values[5]++;
        }
    }

    //function to find the index of the largest result. Will be randomized in the future. 
    var resultIndex = 0;
    for(let i =0; i<values.length; i++){
        if(values[i] > values[resultIndex]){
            resultIndex = i;
        }
    }

    
    
    return(
        <div>
            <Description index = {resultIndex} />    
        </div>
    
    );
}

function Description({index}){
   return(
        <div className="result-section">
            <div className = "title">
                <h3>You are... </h3>
                <h1> {results[index].result}</h1>
            </div>   
            <div className="desc">    
            <p > {results[index].description} </p> 
            <p > {results[index].paragraph1} </p>
            <p > {results[index].paragraph2} </p>    
            <p > {results[index].paragraph3} </p>
            <p > {results[index].paragraph4} </p> 
            <p > {results[index].paragraph5} </p>   
            </div>  
        </div>
    
    );
}

export default function Result(){
    return <ResultPage/>;
}


