import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'


const Result = ({setScore, setClicked, setLives, result, score, clicked, lives }) => {
    
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
        // ** si el valor elegido es igual al resultado correcto sumo 10 puntos al score
        //    si no es el correcto resto uno a las vidas
        //    si la cantidad de vidas es menor a 0 fin del juego (reset - Vidas - Score - Cantidad de clicks)
        if(parseInt(e.target.value) === result){
            setScore(score+10);
        }else{
            if(lives > 0){
                setLives(lives-1);  
            }else{
                alert(`Game Over!! - You Score: ${score}`);
                setClicked(0);
                setLives(3);
                setScore(0);
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