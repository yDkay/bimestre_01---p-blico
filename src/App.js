import logo from "./logo.svg";
import ReactDOM from "react-dom";
import React from "react";
import "./App.css";

class Evento extends React.Component {
  render() {
    return (
      <p style={{ textAlign: "left" }}>
        Data: {this.props.data} <br />
        Horario: {this.props.horario} <br />
        Local: {this.props.local} <br />
        Cidade: {this.props.cidade} <br />
        Genero: {this.props.genero} <br />
      </p>
    );
  }
}

class TipoIngresso extends React.Component {
  render() {
    return (
      <li>
        {this.props.nome}: {this.props.valor}
      </li>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "pink" }}> GUSTAVO LIMA</h1>
        <Evento
          data="2 de Agosto de 2019 (Sexta-Feira)"
          horario="18h30 - 00h00"
          local="Parque do Povo"
          cidade="Campina Grande/PR"
          genero="Arte em forma de SERTANEJO"
        />
        <h3>INGRESSOS </h3>
        <ul style={{ textAlign: "left" }}>
          <TipoIngresso nome="Camarote" valor="R$100,00" />
          <TipoIngresso nome="Camarote Open Bar" valor="R$150,00" />
          <TipoIngresso nome="Front-stage" valor="R$60,00" />
          <TipoIngresso nome="Pista" valor="R$30,00" />
        </ul>
      </header>
    </div>
  );
}

export default App;
