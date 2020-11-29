import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//importo mis componentes
import MiComponente from './components/MiComponente';
import Error from './components/Error';
import Header from './components/Header';
import Peliculas from './components/Peliculas';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                {/* configurar rutas y paginas */}
                {/* los diferentes componentes que se cambian */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/Peliculas" component={Peliculas} />
                    <Route exact path="/pagina" component={MiComponente} />
                    <Route component={Error} />
                </Switch>
                
                <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;