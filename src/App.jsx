import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Titulo from './components/Titulo/titulo';
import itemListContainer from './components/itemListContainer';

function App() {
  const tit = 'Soy titulo de algo'
  return (
    
    <div className="App">
      <Titulo titulo={ tit }/>
      <NavBar/>
      <itemListContainer greeting="Hola soy ItemListContainer"/>
      
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
      </header>
      
    </div>
    
  );
}

export default App;

