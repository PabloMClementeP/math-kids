import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Operation from './components/Operation';
import Result from './components/Result';
import Tips from './components/Tips';

function App() {

  const [selectedOp, setSelectedOp] = useState();
  const [result, setResult] = useState();

  return (
    <div className="container">
        <Header 
          setSelectedOp={setSelectedOp}
        />
        <div className="main">
          <Operation 
            selectedOp={selectedOp}
            setResult={setResult}
          />
          <Result 
            result={result}
          />
        </div>
        <Tips />
    </div>
  );
}

export default App;
