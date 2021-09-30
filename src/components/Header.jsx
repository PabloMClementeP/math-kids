import React, { useEffect, useState } from 'react'
import Score from './Score'

const Header = ({ setSelectedOp, score, lives }) => {

    const [operator, setOperator] = useState();

    const onClickOperator = e =>{
        e.preventDefault();
        setOperator(e.target.value);
    }
    
    useEffect(()=>{
        setSelectedOp(operator);
    },[operator]);

    useEffect(()=>{
        setSelectedOp("+");
    },[]);

    return (
        <>
        <div className="header">
            <div className="selection-operator">
                <h2>Select operation: </h2>
                <button className="operator" value="+" onClick={onClickOperator}>+</button>
                <button className="operator" value="-" onClick={onClickOperator}>-</button>
                <button className="operator" value="x" onClick={onClickOperator}>x</button>
                <button className="operator" value="%" onClick={onClickOperator}>%</button>
            </div>
            {/* Componente Score muestra el puntaje actual */}
            <Score 
                score={score}
                />
        </div>
        <h3 style={{fontSize:"2.5rem", marginLeft:"50px"}}>Lives: {lives}</h3>
        </>
    )
}

export default Header
