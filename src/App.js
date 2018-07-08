import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { pendiete } from './tareas.json'

import FormularioTareas from './components/FormularioTareas';

console.log(pendiete);
//console.log(FormularioTareas);

class App extends Component {
  constructor(){
    super();

    this.state = {
      pendiete
    }

    this.agregarTarea = this.agregarTarea.bind(this);
  }

  agregarTarea(tarea){
      this.setState({
        pendiete: [...this.state.pendiete, tarea]
        })
  }

  quitarTarea(index){
    if (window.confirm('Seguro?')){
      this.setState({
        pendiete: this.state.pendiete.filter((e,i) =>{
          return i !== index;
        })
      })
    }
  }

  render() {
    const t = this.state.pendiete.map((todo, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3> {todo.titulo} </h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioridad}
              </span>
            </div>

            <div className="card-body">
              <p>{todo.descripcion}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>

            <div className="card-footer">
              <button
                  className="btn btn-danger"
                  onClick={this.quitarTarea.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {t.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className = "row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <FormularioTareas   cuandoCreaTarea={this.agregarTarea}/>
            </div>

            <div className="col-md-8">
              <div className="row mt-4">
                { t }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
