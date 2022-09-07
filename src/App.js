import logo from "./logo.svg";
import ReactDOM from "react-dom";
import "./App.css";
import React, { useState } from "react";

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
        <Example> </Example>
      </header>
    </div>
  );
}

class Example extends React.Component {
  handleValue = (event) => {
    event.preventDefault();
    console.log(this.state.count);
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      valor: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <div></div>

        <div onSubmit={this.handleValue}>
          <label>
            Adicionar:
            <input
              type="number"
              onChange={(event) =>
                this.setState({ valor: parseInt(event.target.value) })
              }
            />
          </label>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + this.state.valor,
              })
            }
          >
            Adicionar
          </button>
        </div>
        <div></div>
        <div onSubmit={this.handleValue}>
          <label>
            Remover:
            <input
              type="number"
              onChange={(event) =>
                this.setState({ valor: parseInt(event.target.value) })
              }
            />
          </label>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count - this.state.valor,
              })
            }
          >
            Adicionar
          </button>
        </div>
        <button
          onClick={() => this.setState({ count: (this.state.count = 0) })}
        >
          Zerar
        </button>
      </div>
    );
  }
}

export default App;
