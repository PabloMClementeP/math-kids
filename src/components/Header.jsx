import React from 'react'
import Score from './Score'

const Header = () => {
    return (
        <div className="header">
            <div className="selection-operator">
                <h2>Select operation: </h2>
                <button className="operator">+</button>
                <button className="operator">-</button>
                <button className="operator">x</button>
                <button className="operator">%</button>
            </div>
            <Score />
        </div>
    )
}

export default Header
