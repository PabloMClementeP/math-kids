import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Operation from './components/Operation';
import Result from './components/Result';
import Tips from './components/Tips';

function App() {
  return (
    <div className="container">
        <Header />
        <div className="main">
          <Operation />
          <Result />
        </div>
        <Tips />
    </div>
  );
}

export default App;
