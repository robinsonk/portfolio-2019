import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h2 className="about-header">I'm Kileen and I have a lot to say</h2>
                <p className="about-content">Lorem ipsum dolor sit amet, usu ad invidunt elaboraret. Suas vitae oratio mei at, est et fierent euripidis deseruisse, eu ullum principes cum. Vis no nominavi detraxit efficiantur, et eros noluisse intellegam qui. Usu an odio impetus aliquam. Ex nam aeque clita, pri et nullam malorum.</p>
                <p className="tldr">tl;dr: blah blah blah <span className="span">@Here's my email</span></p>
            </div>
        )
    }
}

export default About;