import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Sidebar from './Sidebar';
import Slider from './Slider';


class Peliculas extends Component {

    //El state se usa cuando quiera mostrar datos en la vista
    state = {
        peliculas: [
            {titulo: 'Los guardianes de la galaxia', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guardianes-de-la-galaxia-vol-3-chris-pratt-1549289460.jpg'},
            {titulo: 'Los guardianes de la galaxia 2', image: 'https://www.latercera.com/resizer/NpHAClZFyUOPKu9agiDtVXrwNPc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PA4SSGICDFGQXDTBGSKP2NCSCI.jpg'},
            {titulo: 'El corredor del laberinto', image: 'https://i.blogs.es/7ac2f6/650_1000_el-corredor-del-laberinto-1/1366_2000.jpg'}
        ],
        nombre: 'Anthonny',
        favorita: {}
    }

    favorita = (pelicula) => {
        this.setState({
            favorita: pelicula
        })
    }

    render() {

        //añado estilos css
        var pStyle = {
            background: '#20B2AA',
            color: 'white',
            padding: '10px'
        };

        //otra forma de hacer un if else
        /*
        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <p style={pStyle}> 
                    <strong>Mi pelicula favorita es: </strong>
                    <span> {this.state.favorita.titulo}</span> 
                </p>
            )
        }else{
            favorita = (<p>No hay peliculas favorita </p>)
        }
        */

        return (
            <div id="formulario">
                <Slider />
                <div className="center">
                    <section id="content" className="peliculas">
                        <h2 className="article-title">Pelicula favorita</h2>
                        {/* Esto es una forma de if para que solo aparezca cuando hay datos y si no otro html, condicion ? (true) : (false)*/}
                        {this.state.favorita.titulo ? (
                                <p style={pStyle}> 
                                    <strong>Mi pelicula favorita es: </strong>
                                    <span> {this.state.favorita.titulo}</span> 
                                </p>
                            ) : (
                                <p>No hay peliculas favorita </p>
                            )  
                        }
                
                        <h2 className="article-title">Peliculas</h2>
                        <div id="articles">
                            {
                                /*Crear componente pelicula*/
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        // cuando le de click el metodo marcarFavorita se ejecuta y lanza el evento this.favorita con la pelicula
                                        <Pelicula key={i} pelicula={pelicula} marcarFavorita={this.favorita}/>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Peliculas;