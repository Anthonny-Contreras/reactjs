import React, {Component} from 'react';
import MensajeEstatico from './miComponenteEstatico'
import Slider from './Slider';
import Sidebar from './Sidebar';

class MiComponente extends Component{

    render() {
        let receta = {
            nombre: "Pizza",
            ingredientes: ['Queso', 'Tomante', 'piña'],
            calorias: 400
        };

        return (
            <div id="Pagina">
                <Slider />
                <div className="center">
                    <section id="content">
                        <h2 className="article-title">Pagina sin definir</h2>
                        <p>{receta.nombre}</p>
                        <p>{receta.calorias}</p>
                        
                        <ul>
                            {
                                receta.ingredientes.map((ingrediente, i) => {
                                    return (
                                        <li key={i}> {ingrediente} </li>
                                    );
                                })
                            }
                        </ul>
                        <MensajeEstatico/>
                    </section>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default MiComponente;