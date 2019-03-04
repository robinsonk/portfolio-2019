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
                    extras: 'vanilla | jQuery',
                },
                {
                    tech: 'React',
                    progress: { height: '100%', width: '99%'},
                    extras: 'Context | Router DOM',
                },
                {
                    tech: 'Responsive Design',
                    progress: { height: '100%', width: '98%'},
                    extras: 'HTML | CSS',
                },
                {
                    tech: 'Adobe Suite',
                    progress: { height: '100%', width: '90%'},
                    extras: 'XD | Photoshop | Illustrator',
                },
                {
                    tech: 'Node',
                    progress: { height: '100%', width: '30%'},
                    extras: 'Express | NPM (in progress)',
                },
                {
                    tech: 'Database',
                    progress: { height: '100%', width: '20%'},
                    extras: 'MongoDB | SQL (in progress)',
                },
            ]
        };
    }
    render() {
        return (
            <div className="slider-container">
                <h2 className="slider-header">Tech I Love to Work With</h2>
                <p className="slider-content">Lorem ipsum dolor sit amet, usu ad invidunt elaboraret. Suas vitae oratio mei at, est et fierent euripidis deseruisse, eu ullum principes cum.</p>
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
            </div>
        )
    }
}

export default Sliders;