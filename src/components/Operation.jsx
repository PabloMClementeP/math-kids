import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'

const Operation = ({ selectedOp, setResult }) => {

    const [numbers, setNumbers] = useState({
        num1: 0,
        num2: 1
    })

    useEffect(()=>{
        getRandomNumber();
    },[selectedOp]);

    useEffect(()=>{
        let result;
        switch (selectedOp) {
            case '+':
                result = numbers.num1 + numbers.num2;
                break;
            case '-':
                result = numbers.num1 - numbers.num2;
                break;
            case 'x':
                result = numbers.num1 * numbers.num2;
                break;
            case '%':
                result = numbers.num1 / numbers.num2;
                break;
            default:
                break;
        }
        setResult(result);
    },[numbers]);

    const getRandomNumber = ()=>{
        setNumbers({
            num1:randomNumber(0,9),
            num2:randomNumber(0,9)
        });
    }


    return (
        <div className="operation-container">
            <div className="operation-buttons">
                <p>
                    { selectedOp ?`${numbers.num1}` : ``}
                </p>
                <p>
                    { selectedOp ?`${selectedOp}` : ``}
                </p>
                <p>
                    { selectedOp ?`${numbers.num2}` : ``}
                </p>
            </div>
        </div>
    )
}

export default Operation
