import { Component } from 'react'

import "./styles.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice
    this.props.apagarNota(indice)
    console.log(this.props)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <div className="info">
            <h3 className="card-nota-titulo">{this.props.titulo}</h3>
            <h4>{this.props.categoria}</h4>
          </div>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota-texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota