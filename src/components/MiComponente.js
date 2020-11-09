import React, {Component} from 'react';
import MensajeEstatico from './miComponenteEstatico'

class MiComponente extends Component{

    render() {
        let receta = {
            nombre: "Pizza",
            ingredientes: ['Queso', 'Tomante', 'piña'],
            calorias: 400
        };

        return (
            <React.Fragment>
                <p>{receta.nombre}</p>
                <p>{receta.calorias}</p>
                
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}> {ingrediente} </li>
                            );
                        })
                    }
                </ol>
                <MensajeEstatico/>
            </React.Fragment>
        );
    }
}

export default MiComponente;