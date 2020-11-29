import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Blog extends Component {

    render() {
        return (
            <div id="blog">
                <Slider />
                <div className="center">
                    <section id="content">
                        <h2 className="article-title">Blog</h2>
                    </section>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Blog;