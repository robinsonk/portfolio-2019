import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    name: 'JOT.',
                    blurb: 'A fully-responsive front-end note app.',
                    tech: 'React (Router DOM, Context API) & CSS',
                    live: 'https://jot-noteapp.netlify.com/',
                    code: 'https://github.com/robinsonk/jot-app',
                    screenshot: 'jot_all_notes.png',
                },
                {
                    name: 'ReadView',
                    blurb: 'ReadView aims to deliver book reviews, specifically in video format, to the user.',
                    tech: 'JavaScript (jQuery), Google Books API, YouTube API, HTML, & CSS',
                    live: 'https://robinsonk.github.io/ReadView/',
                    code: 'https://github.com/robinsonk/ReadView',
                    screenshot: 'readview.png',
                },
                {
                    name: 'Mortal Kombat Quiz',
                    blurb: 'A simple interactive quiz for fans of the Moral Kombat series.',
                    tech: 'JavaScript, HTML, & CSS',
                    live: 'https://robinsonk.github.io/quizzApp/',
                    code: 'https://github.com/robinsonk/quizzApp',
                    screenshot: 'mkquiz.png',
                },
            ]
        }
    }

    render() {
        return (
            <div className="projects-container">
                <h2 className="projects-header">Selected Projects</h2>
                <p className="projects-content">
                    Feel free to check out some of my recent projects below. Hover over a photo to learn more.
                </p>
                <div className="projects">
                    {this.state.projects.map(project => {
                        return (
                            <div className="project-row">
                                <div className="photo-section">
                                    <img src={require(`./${project.screenshot}`)} className="project-photo" />
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h2 className="project-title">{project.name}</h2>
                                            <p className="project-blurb">{project.blurb}</p>
                                            <p className="overlay-info">Made with love using: {project.tech}</p>
                                            <a href={project.live}><button className="folio-button">VIEW LIVE</button></a>
                                            <a href={project.code}><button className="folio-button">VIEW CODE</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Projects;