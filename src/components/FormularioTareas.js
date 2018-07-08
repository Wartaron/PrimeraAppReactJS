import React, { Component } from 'react';

class FormularioTareas extends Component {
  constructor() {
    super();

    this.state = {
      titulo: '',
      responsable: '',
      descripcion: '',
      prioridad: 'Neh'
    };

    this.ejecutarCuandoCambia = this.ejecutarCuandoCambia.bind(this);
    this.subirFormulario = this.subirFormulario.bind(this);
  }

  ejecutarCuandoCambia(e){
    const {value, name} = e.target;
    //console.log(value, name);
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  subirFormulario(e){
    e.preventDefault();
    this.props.cuandoCreaTarea(this.state);
    console.log(this.state);
  }

  render()
  {
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.subirFormulario}>
          <div className = "form-group">
            <input
              type="text"
              name="titulo"
              onChange={this.ejecutarCuandoCambia}
              className="form-control"
              placeholder="Titulo"/>
          </div>
          <div className = "form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              placeholder="Responsable"
              onChange={this.ejecutarCuandoCambia}/>
          </div>
          <div className = "form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Descripcion"
              onChange={this.ejecutarCuandoCambia}/>
          </div>
          <div className = "form-group">
            <select
              type="text"
              name="prioridad"
              className="form-control"
              placeholder="Prioridad"
              onChange={this.ejecutarCuandoCambia}>
                <option>Neh</option>
                <option>Igual no lo hara</option>
                <option>No tan putamente alta</option>
                <option>Putamente alta</option>
              </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }
}

export default FormularioTareas;
