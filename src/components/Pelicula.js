import React, { Component } from 'react';

class Pelicula extends Component {
    
    //creo una funcion que envie los datos
    marcar = () =>{
        //envio la pelicula con el eventop marcarFavorita que le llegará al padre por los props
        this.props.marcarFavorita(this.props.pelicula);
    }

    render() {
        const {titulo, image} = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo}/>
                </div>

                <h2> {titulo} </h2>
                <span className="date"> 5 minute ago</span>
                <a href="article.html">Read more</a>
                <button onClick={this.marcar}>Marcar como favorita</button>
                
                {/* Limpiar los flotados para que no se pasen los siguientes elementos */}
                <div className="clearfix"></div>

            </article>
        );
    }
}

export default Pelicula;