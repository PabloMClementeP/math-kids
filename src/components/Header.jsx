import React, { useEffect, useState } from 'react'
import Score from './Score'

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const Header = ({ setSelectedOp, score, lives }) => {

    let heartsRest = [];
    let heartsLosed = []


    for (let i = 0; i < lives; i++){
        heartsRest.push(<HeartFilled key={Math.random()} className="hearts"/>)
    }
    
    let losed = 5 - lives;
    for (let i = 0; i < losed; i++){
        heartsLosed.push(<HeartOutlined key={Math.random()} className="losed-heart"/>)
    }

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
        <Row gutter={[0,5]} justify="space-around">
            <Col xs={24} md={17} >
                <Row className="selection glass glass-blue" align="middle">
                    <Col xs={24} md={12}>
                        <h2>Select operation: </h2>
                    </Col>
                    <Col xs={24} md={12}>
                        <button className="op-button" value="+" onClick={onClickOperator}>+</button>
                        <button className="op-button" value="-" onClick={onClickOperator}>-</button>
                        <button className="op-button" value="x" onClick={onClickOperator}>x</button>
                        <button className="op-button" value="%" onClick={onClickOperator}>%</button>
                    </Col>
                </Row>
            </Col>


            <Col xs={24} md={4} className="score glass glass-white">
                {/* Show the actual Score */}
                <Score 
                    score={score}
                    />
            </Col>

            <Col span={24} className="lives glass">
                <h3>Lives: </h3>
                {heartsRest.map(el=>{
                    return el
                })}
                
                {heartsLosed.map(el=>{
                    return el
                })}

                
            </Col>
        </Row>
    )
}

export default Header
