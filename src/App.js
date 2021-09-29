import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Operation from './components/Operation';
import Result from './components/Result';
import Tips from './components/Tips';

function App() {

  const [selectedOp, setSelectedOp] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [clicked, setClicked] = useState(0);

  return (
    <div className="container">
        <Header 
          setSelectedOp={setSelectedOp}
          score={score}
        />
        <div className="main">
          <Operation 
            selectedOp={selectedOp}
            setResult={setResult}
            setClicked={setClicked}
            clicked={clicked}
          />
          <Result 
            setScore={setScore}
            setClicked={setClicked}
            setLives={setLives}
            result={result}
            score={score}
            clicked={clicked}
            lives={lives}          />
        </div>
        <Tips />
    </div>
  );
}

export default App;
