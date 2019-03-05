import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about-container" id="about">
                <h2 className="about-header">I'm Kileen and I have a lot to say</h2>
                <p className="about-content">
                    I'm a <span className="highlight3">passionate developer</span> who loves spending hours writing clean functions, chosing fonts, and sketching ideas on paper before bringing them to life. <br /><br />
                    With a background in content writing and graphic design, I bring a <span className="highlight3">well-rounded skillset</span> to my work, along with the ability to effectively communicate with different roles throughout the development process. 
                </p>
                    <h3 className="about-header2">What it's like to work with me</h3>
                    <p className="about-content">
                   I prioritize strong, clean code and user-focused, acessible designs in my work. I'm also a <span className="highlight3">huge fan of communication</span>, be it via slack, email, or face-to-face. I'm no stranger to long days, as I judge my daily success based on productivity instead of working hours.  <br />
                    </p>
                    <h3 className="about-header2">Who I am after hours:</h3>
                    <p className="about-content">
                    I'm going through life with a cup of tea in one hand and a cat in the other. When I'm not coding, I'm typically found at home with my nose in a book or lost in an rpg. <br />
                    </p>
                <p className="tldr">tl;dr: I'm a front-end dev who loves what I do.</p>
            </div>
        )
    }
}

export default About;