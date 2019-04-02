import React, { Component } from 'react';
import './Sliders.css'

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [
                {
                    tech: 'JavaScript',
                    progress: { height: '100%', width: '100%'},
                    extras: 'jQuery, vanilla',
                },
                {
                    tech: 'Responsive Design',
                    progress: { height: '100%', width: '98%'},
                    extras: 'HTML, CSS',
                },
                {
                    tech: 'React',
                    progress: { height: '100%', width: '96%'},
                    extras: 'Context API',
                },
                {
                    tech: 'Prototyping & Design',
                    progress: { height: '100%', width: '90%'},
                    extras: 'Adobe: XD, PS, IL',
                },
                {
                    tech: 'Testing',
                    progress: { height: '100%', width: '85%'},
                    extras: 'Mocha, Chai, Jest',
                },
                {
                    tech: 'Node & Database',
                    progress: { height: '100%', width: '40%'},
                    extras: 'Express, PostgreSQL, NPM',
                },
            ]
        };
    }
    render() {
        return (
            <div className="slider-container" id="skills">
                <h2 className="slider-header">Tech I Love to Work With</h2>
                <p className="slider-content">
                    My process begins at the <span className="highlight1">design phase</span>. From pen and paper to prototypes to code, I do it all.<br/><br />
                    While I primarily work in front-end, I'm fully skilled in <span className="highlight1">fullstack development</span> (PERN stack).<br /><br />
                    My (dev) weapons of choice are listed below:   
                </p>
                <div className="sizing"> 
                {this.state.sliders.map(slider => {
                    return (
                        <div className="slider">
                            <p className="tech-name">{slider.tech}</p>
                            <div className="slider-background">
                                <div className="slider-progress" style={slider.progress}><p className="extras">{slider.extras}</p></div>
                            </div>
                         <p></p>
                        </div>
                    )
                })}
                </div>
                <p className="slider-content">
                    In addition to dev skills, I also have a strong background in <span className="highlight1">content writing</span> and copywriting. 
                </p>
            </div>
        )
    }
}

export default Sliders;