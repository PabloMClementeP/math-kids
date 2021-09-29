import React, { useEffect, useState } from 'react'
import Score from './Score'

const Header = ({ setSelectedOp, score, hits }) => {

    const [operator, setOperator] = useState();

    const onClickOperator = e =>{
        e.preventDefault();
        setOperator(e.target.value);
    }
    
    useEffect(()=>{
        setSelectedOp(operator);
    },[operator]);

    return (

        <div className="header">
            <div className="selection-operator">
                <h2>Select operation: </h2>
                <button className="operator" value="+" onClick={onClickOperator}>+</button>
                <button className="operator" value="-" onClick={onClickOperator}>-</button>
                <button className="operator" value="x" onClick={onClickOperator}>x</button>
                <button className="operator" value="%" onClick={onClickOperator}>%</button>
            </div>
            <Score 
                score={score}
                />
        </div>

    )
}

export default Header
