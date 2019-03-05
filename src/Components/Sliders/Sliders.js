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
                    extras: 'vanilla - jQuery',
                },
                {
                    tech: 'Responsive Design',
                    progress: { height: '100%', width: '98%'},
                    extras: 'HTML - CSS',
                },
                {
                    tech: 'React',
                    progress: { height: '100%', width: '99%'},
                    extras: 'Context API',
                },
                {
                    tech: 'Adobe Suite',
                    progress: { height: '100%', width: '90%'},
                    extras: 'XD - PS - IL',
                },
                {
                    tech: 'Node ( learning )',
                    progress: { height: '100%', width: '30%'},
                    extras: 'Express - NPM',
                },
                {
                    tech: 'Database (learning)',
                    progress: { height: '100%', width: '20%'},
                    extras: 'MongoDB - SQL',
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
                    While I primarily work in front-end, I'm currently expanding my skills to include <span className="highlight1">fullstack development</span> (MERN stack).<br /><br />
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
                    In addition to dev skills, I also have a strong background in content writing and copywriting. 
                </p>
            </div>
        )
    }
}

export default Sliders;