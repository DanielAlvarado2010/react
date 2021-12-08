import logo from './logo.svg';
import './App.css';

//Components
import  Greeting  from './components/Greeting';
import FullName from './components/FullName';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting name="Daniel" />
        <FullName name="Daniel" lastName="Alvarado" />
        <Calculator operador="multiplicacion" numeroA={4} numeroB={6} />

      </header>
    </div>
  );
}

export default App;
