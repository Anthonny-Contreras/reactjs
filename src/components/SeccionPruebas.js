import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    // Esto es un estado
    state = {
        contador: 0
    };
    // Si usamos una funcion flecha no es necesario en el this.suma añadirle el .bind(this)
    suma = () => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    render() {
        return (
            <section id="content">
                <h2 className="article-title">Estados</h2>
                <p>Contador: {this.state.contador}</p>
                <input type="button" value="Sumar" onClick={this.suma} />

                <h2 className="article-title">Componentes</h2>
                <MiComponente/>
            </section>
        );
    }
}

export default SeccionPruebas;