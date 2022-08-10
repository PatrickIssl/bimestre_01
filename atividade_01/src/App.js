import logo from './logo.svg';
import './App.css';

const astyle = {
  color: 'red',
  fontSize: '100px'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/PatrickIssl/bimestre_01"
          target="_blank"
          rel="noopener noreferrer"
          style={astyle}
        >
          Patrick Issler Dal Lago
        </a>
      </header>
    </div>
  );
}

export default App;
