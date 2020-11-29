import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Home extends Component {

    render() {
        return (
            <div id="home">
                <Slider />
                <div className="center">
                    <section id="content">
                        <h2 className="article-title">Últimos articulos</h2>
                    </section>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Home;