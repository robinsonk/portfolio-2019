import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <img className="logo" src={require('./logo_folio.png')} alt="k logo with strikethrough"/>
                <div className="hero">
                    <img className="me" src={require('./me3.png')} alt="k logo with strikethrough"/>
                    <h1 className="hero-header">Kileen Robinson</h1>
                    <h2 className="hero-sub">I blend front-end development with UI design to create user-focused and maintainable interfaces.</h2>
                </div> 
            </header>
        )
    }
}

export default Header;