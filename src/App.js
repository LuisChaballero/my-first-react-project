import React from 'react';
import './App.css';
import Hoby from './Hoby';

class App extends React.Component {

  constructor( props ){
    super ( props )
    this.state = {
      nombre : "Alfredo",
      apellido : "Salazar"
    }
  }

  render(){
    let accion = "Programar";
    return (
      <div>
        Hola de nuevo {this.state.nombre} {this.state.apellido}
        <div>
          <Hoby accion="Dar clases" test={1}/>
          <Hoby accion={accion} test={2}/>
          <Hoby accion="Escuchar musica" test={3}/>
        </div>
      </div>
    )
  }
}

export default App;
