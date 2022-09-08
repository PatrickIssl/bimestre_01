
import { useState } from 'react';
import './App.css';

function App(props) {

  function Contador() {
    setCount(parseInt(count) + parseInt(document.getElementById('valor').value))
  }

  function Remover() {
    setCount(parseInt(count) - parseInt(document.getElementById('valor').value))
  }

  function Zerar() {
    setCount(0)
  }

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{count}</p>

          <input
            id='valor'
            type="number"
            pattern="[0-9]+$"
            placeholder="Insira um valor"
          />

          <button onClick={Contador}>
            Adicionar
          </button>
          <button onClick={Remover}>
            Remover
          </button>
          <button onClick={Zerar}>
            Resetar 
          </button>

        </div>
      </header>
    </div>
  );
}

export default App;