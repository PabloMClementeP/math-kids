import React from 'react'

const Score = ({ score }) => {
    return (
        <div className="score-container">
           <h4>You Score:</h4> 
           <p>{score}</p>
        </div>
    )
}

export default Score
