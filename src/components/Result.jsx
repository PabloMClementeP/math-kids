import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'


const Result = ({setScore, setClicked, setLives, result, score, clicked, lives }) => {
    
    // useState array of values to show in the result panel 
    const [values, setValues] = useState([0,0,0]);

    // when the result change, get another random values
    useEffect(()=>{
        let value1 = randomNumber(0,99);
        let value3 = randomNumber(0,99);
        setValues(shuffleArray([value1,result,value3]));
    },[result]);

    // Check if clicked the right value
    const checkingResult = e =>{
        e.preventDefault();
        if(parseInt(e.target.value) === result){
            setScore(score+10);
        }else{
            if(lives > 0){
                setLives(lives-1);  
            }else{
                alert("Game Over!!");
                setClicked(0);
                setLives(3);
            }
        }
        setClicked(clicked + 1); 
        console.log(lives)
    }

    // Shufle the array order
    const shuffleArray = (numbersArray) =>{
        return numbersArray.sort(()=> Math.random() - 0.5);
    }

    return (
        <div className="result-container">
            <div className="result-buttons">
                <button 
                    value={values[0]}
                    onClick={checkingResult}
                >{values[0]}</button>
                <button 
                    value={values[1]}
                    onClick={checkingResult}
                >{values[1]}</button>
                <button 
                    value={values[2]}
                    onClick={checkingResult}
                >{values[2]}</button>
            </div>
        </div>
    )
}

export default Result