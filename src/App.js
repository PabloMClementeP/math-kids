import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Operation from './components/Operation';
import Result from './components/Result';
// import Tips from './components/Tips';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function App() {

  const Lives = 5;

  const [selectedOp, setSelectedOp] = useState("+");
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(Lives);
  const [clicked, setClicked] = useState(0);

  const resetLives = () =>{
    setLives(Lives);
  }

  return (
    <div className="body">
      <Row className="container header">
        <Col span={24}>
          {/* Header component contain the operation election button 
              Show the score and rest lives */}
          <Header 
            setSelectedOp={setSelectedOp}
            score={score}
            lives={lives}
         />
        </Col>
      </Row>


      <Row className="container" >
        <Col className="glass glass-blue operation-buttons">
          {/* Operation contain the numbers for the operation
              and operator */}
          <Operation 
            selectedOp={selectedOp}
            setResult={setResult}
            setClicked={setClicked}
            clicked={clicked}
          />
        </Col>
        
        <Col className="glass result-container">
          {/* Result contain the 3 numbers where  the correct one must be chosen */}
          <Result 
            setScore={setScore}
            setClicked={setClicked}
            setLives={setLives}
            resetLives={resetLives}
            result={result}
            score={score}
            clicked={clicked}
            lives={lives}          
          />
        </Col>
      </Row>
      

      {/* <Tips /> */}

    </div>
  );
}

export default App;
