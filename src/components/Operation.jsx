import React, { useEffect, useState } from 'react'
import randomNumber from '../helpers/random-value'

const Operation = ({ selectedOp, setResult, clicked }) => {

    const [numbers, setNumbers] = useState({
        num1: 0,
        num2: 1
    })

    useEffect(()=>{
        getRandomNumber();
    },[selectedOp]);

    useEffect (()=>{
        getRandomNumber();
    },[clicked]);


    useEffect(()=>{
        let result;
        switch (selectedOp) {
            case '+':
                result = numbers.num1 + numbers.num2;
                break;
            case '-':
                result = numbers.num1 - numbers.num2;
                if( result < 0){
                    getRandomNumber();
                    result = numbers.num1 - numbers.num2;
                }
                break;
            case 'x':
                result = numbers.num1 * numbers.num2;
                break;
            case '%':

                if(multiplo(numbers.num1, numbers.num2)){
                    result = numbers.num1 / numbers.num2;
                }else{
                    result = 0;
                    getRandomNumber();
                }
                break;
        }
        setResult(result);
    },[numbers]);

    const getRandomNumber = ()=>{
        if(selectedOp === '%'){
            setNumbers({
                num1:randomNumber(0,99),
                num2:randomNumber(0,10)
            });
        }else{
            setNumbers({
                num1:randomNumber(0,9),
                num2:randomNumber(0,9)
            });
        }
    }


    const multiplo = (v1, v2)=>{
        let remainder = v1 % v2;
        if (remainder === 0){
            return true;
        }else{
            return false;
        }
    }

    return (
        <>
            <p>
                { selectedOp ?`${numbers.num1}` : ``}
            </p>
            <p>
                { selectedOp ?`${selectedOp}` : ``}
            </p>
            <p>
                { selectedOp ?`${numbers.num2}` : ``}
            </p>
        </>
    )
}

export default Operation
