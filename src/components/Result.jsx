import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'

const Result = ({ result }) => {

    const [values, setValues] = useState([0,0,0]);

    useEffect(()=>{
        let value1 = randomNumber(0,99);
        let value3 = randomNumber(0,99);
        setValues([value1,result,value3]);
    },[result]);

    return (
        <div className="result-container">
            <div className="result-buttons">
                <button>{values[0]}</button>
                <button>{values[1]}</button>
                <button>{values[2]}</button>
            </div>
        </div>
    )
}

export default Result