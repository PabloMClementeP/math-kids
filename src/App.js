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
        {/* Header componente contiene los botones de eleccion de operador
            muestra el score y las vidas restantes  */}
        <Header 
          setSelectedOp={setSelectedOp}
          score={score}
          lives={lives}
        />
        <div className="main">
          {/* Componente Operation contiene los numeros para la operacion 
              y el simbolo de la operacion */}
          <Operation 
            selectedOp={selectedOp}
            setResult={setResult}
            setClicked={setClicked}
            clicked={clicked}
          />
          {/* Componente Result contiene los 3 numeros donde se debe elegir el correcto */}
          <Result 
            setScore={setScore}
            setClicked={setClicked}
            setLives={setLives}
            result={result}
            score={score}
            clicked={clicked}
            lives={lives}          
          />
        </div>
        <Tips />
    </div>
  );
}

export default App;
