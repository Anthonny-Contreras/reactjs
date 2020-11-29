import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nameRef = React.createRef();
    surnameRef = React.createRef();
    biographyRef = React.createRef();
    genderManRef = React.createRef();  
    genderWomanRef = React.createRef();  

    state = {
        user: {}
    };

    getformulary = (event) => {
        event.preventDefault();

        var genero = "";
        if(this.genderManRef.current.checked){
            genero = this.genderManRef.current.value
        }else{
            genero = this.genderWomanRef.current.value
        }

        var user = {
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            biography: this.biographyRef.current.value,
            gender: genero,
        };

        console.log(user)
    }

    render() {
        return (
            <div id="formulario">
                <Slider />
                <div className="center">
                    <section id="content">
                        <h2 className="article-title">Formulario</h2>

                        <form className="full-form" onSubmit={this.getformulary}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" ref={this.nameRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Surname</label>
                                <input type="text" name="surname" ref={this.surnameRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biography</label>
                                <textarea name="bio" ref={this.biographyRef} ></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="gender" value="Man" ref={this.genderManRef} /> Man
                                <input type="radio" name="gender" value="Woman" ref={this.genderWomanRef} /> Woman
                            </div>
                            
                            <div className="clearfix"></div>

                            <input type="submit" value="Send" className="btn btn-success"/>
                        </form>

                    </section>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Formulario;