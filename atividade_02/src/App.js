import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Ingresso nome="GUSTAVO LIMA" data=" 2 de agosto de 2019 (Sexta-feira)" horario="18h30 - 00h00" local="Parque do povo" cidade="Campina Grande/PR" genero = "Arte em forma de SERTANEJO"></Ingresso>

      </header>
    </div>
  );
}

export default App;


function Ingresso(props) {
  return (
    <div style={{textAlign:"left", marginTop:50}}x>
      <h2>{props.nome}</h2>
      <div>
        <b>Data:</b>
        <>{props.data}</>
      </div>
      <div>
        <b>Horário:</b>
        <> {props.horario}</>
      </div>
      <div>
        <b>Local:</b>
        <> {props.local}</>
      </div>
      <div>
        <b>Cidade:</b>
        <> {props.cidade}</>
      </div>
      <div>
        <b>Gênero:</b>
        <> {props.genero}</>
      </div>

      <div style={{textAlign:"left", marginTop:50}}>
        < h4 >INGRESSOS</h4>
        <div style={{marginLeft:50, marginTop:50}}>
        <TipoIngresso tipo = "Camarote (open bar)" preco = "R$150,00" />
        <TipoIngresso tipo = "Camarote " preco = "R$100,00" />
        <TipoIngresso tipo = "Front-Stage " preco = "R$60,00" />
        <TipoIngresso tipo = "Pista " preco = "R$30,00" />
        </div>
        </div>
    </div>

  );

  function TipoIngresso(props) {
    return (
            <li>{props.tipo}: {props.preco}</li>
  
    );
  }
}