import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'


function Text(){

    
    const {state} = useLocation();
    const {history} = state || {}
    console.log(history);
    
    
    return(
        <div>
            <p> Hello </p>     
        </div>
    
    );
}

export default function Result(){
    return <Text/>;
}


