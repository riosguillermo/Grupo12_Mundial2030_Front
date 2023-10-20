import React, {Component} from "react";

class widgets extends Component {
  constructor(){
    super();
    this.state = {
      arteNombre: "Cargando...",
      arteImagen: "Cargando...",
      ultimoUsuario: {
        nombre: "Cargando...",
        correo: "Cargando...",
        telefono: "Cargando...",
        nacimiento: "Cargando...",
      },
    }
  }

  apiCall(url, consecuencia){
    fetch(url).then(function(response){
      return response.json()
    }).then(function(data){
      return consecuencia(data);
    })
  }

  componentDidMount(){
    this.apiCall("http://localhost:3002/cards/arte/apiArte", this.actualizarDatoUltimoArte);
    this.apiCall("http://localhost:3002/apiUsuario", this.actualizarDatoUltimoUsuario);
  }

  actualizarDatoUltimoArte = (data) => {
    let ultimoArte = data.data[data.data.length-1];
    this.setState({
      arteNombre: ultimoArte.nombre,
      arteImagen: ultimoArte.imagen,
    })
  }

  actualizarDatoUltimoUsuario = (data) => {
    let usuario = data.data[data.data.length-1];
    console.log(usuario)
    this.setState({
      ultimoUsuario: usuario,
    })
  }



  render(){
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Ultimo arte: {this.state.arteNombre}
            </h6>
          </div>
          <div className="card-body">
              <img className="imagenArte" src={`https://dhgrupo12ad.alwaysdata.net/${this.state.arteImagen}`}></img>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Ultimo usuario creado: {this.state.ultimoUsuario.nombre} 
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">Correo electronico: {this.state.ultimoUsuario.correo}</div>
                </div>
              </div>
              <div className="col-lg-12 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">Fecha de nacimiento: {this.state.ultimoUsuario.nacimiento}</div>
                </div>
              </div>
              <div className="col-lg-12 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">Telefono: {this.state.ultimoUsuario.telefono}</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default widgets;