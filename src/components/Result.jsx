import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'


const Result = ({setScore, setClicked, setLives, resetLives, result, score, clicked, lives }) => {
    
    // useState array of values to show in the result panel 
    const [values, setValues] = useState([0,0,0]);

    // when the result change, get another random values
    useEffect(()=>{
        // checking the values are not equal to result or less to 0
        let value1 = -1;
        while (value1 < 0 || value1 === result ){
            value1 = randomNumber((result - 10),(result+10));
        } 

        let value2 = -1;
        while (value2 < 0 || value2 === result || value2 === value1 ){
            value2 = randomNumber((result - 10),(result+10));
        }       
        // Shuffle array
        setValues(shuffleArray([value1,value2,result]));
    },[result]);

    // Check if clicked the right value
    const checkingResult = e =>{
        e.preventDefault();

        // If the chosen value is equal to the correct result, I add 10 points to the score
        // if it's not the correct one, rest one to the lives
        // if the number of lives is less than 0 end of the game (reset - Lives - Score - Number of clicks)

        if(parseInt(e.target.value) === result){
            setScore(score+10);
        }else{
            if(lives > 0){
                setLives(lives-1);  
            }else{
                alert(`Game Over!! - You Score: ${score}`);
                setClicked(0);
                resetLives();
                setScore(0);
            }
        }
        setClicked(clicked + 1); 
    }

    // Shufle the array order
    const shuffleArray = (numbersArray) =>{
        return numbersArray.sort(()=> Math.random() - 0.5);
    }

    return (
        <div className="result-buttons">
            { values.map((val =>{
                return (
                    <button
                        key={Math.random(val)}
                        value={val}
                        onClick={checkingResult}
                    >{val}</button>
                )
            }))}
        </div>
    )
}

export default Result