import React, { Component } from 'react';
import logo from '../assets/images/reactjs.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img src={logo} alt="logotipo" className="app-logo" />
                        <span id="brand"> <strong>Master</strong> ReactJS </span>
                    </div>

                    {/* Menu */}
                    <nav id="menu">
                        <ul>
                            <li> <NavLink to="/home" activeClassName="active"> Inicio           </NavLink> </li>
                            <li> <NavLink to="/blog" activeClassName="active"> Blog             </NavLink> </li>
                            <li> <NavLink to="/formulario" activeClassName="active"> Formulario </NavLink> </li>
                            <li> <NavLink to="/peliculas" activeClassName="active"> Peliculas   </NavLink> </li>
                            <li> <NavLink to="/pagina" activeClassName="active"> Pagina         </NavLink> </li>
                        </ul>
                    </nav>

                    {/* Limpiar los flotados para que no se pasen los siguientes elementos */}
                    <div className="clearfix"></div>

                </div>
            </header>
        );
    }
}

export default Header;