import { Component } from "react";
import CardNota from "../CardNota";
import './styles.css';

class ListaDeNotas extends Component {
  render(){
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return(
            <li className="lista-notas-item" key={index}>
              <CardNota 
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                text={nota.texto}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas