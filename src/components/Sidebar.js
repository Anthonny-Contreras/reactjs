import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <React.Fragment>
                {/* This is the sidebar */}
                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>You can do this</h3>
                        <a href="#" className="btn btn-success">Create article</a>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Search</h3>
                        <p>Find your article</p>
                        <form action="">
                            <input type="text" name="search"/>
                            <input type="submit" name="submit" value="Search" className="btn"/>
                        </form>
                    </div>
                </aside>

                {/* Limpiar los flotados para que no se pasen los siguientes elementos */}
                <div className="clearfix"></div>
            </React.Fragment>
        );
    }
}

export default Sidebar;