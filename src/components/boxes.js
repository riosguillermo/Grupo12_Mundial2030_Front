import React, {Component} from "react";

class boxes extends Component {

  constructor(){
    super();
    this.state = {
      cantidadUsuarios: "Cargando...",
      cantidadArte: "Cargando...",
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
    this.apiCall("http://localhost:3002/apiUsuario", this.actualizarDatoUsuario);
    this.apiCall("http://localhost:3002/cards/arte/apiArte", this.actualizarDatoArte);
  }

  actualizarDatoArte = (data) => {
    this.setState({
      cantidadArte: data.data.length
    })
  }

  actualizarDatoUsuario = (data) => {
    this.setState({
      cantidadUsuarios: data.data.length
    })
  }  


  render(){
  return (
    
    <div className="row">
   

      <div className="col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  {" "}
                  Cantidad de usuarios
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {this.state.cantidadUsuarios}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Total de obras compartidas
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.cantidadArte}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default boxes;