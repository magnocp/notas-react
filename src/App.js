import React, { Component } from 'react'
import FormularioCadastro from './components/FomularioCadastro'
import ListaDeNotas from './components/ListaDeNota'
import './assets/App.css'
import './assets/index.css'
import ListaDeCategorias from './components/ListaDeCategorias'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado)
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.apagarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    )
  }
}

export default App
