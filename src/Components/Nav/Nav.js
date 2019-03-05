import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav role="navigation" className="nav">
                <div className="nav-content">
                    <ul>
                        <li>
                            <Link
                                className="nav-link"
                                activeClass="nav-link-active"
                                spy={true}
                                to="about"
                                smooth="true"
                                offset={-70}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-link"
                                activeClass="nav-link-active"
                                spy={true}
                                to="skills"
                                smooth="true"
                                offset={0}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-link"
                                activeClass="nav-link-active"
                                spy={true}
                                to="projects"
                                smooth="true"
                                offset={-200}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-link"
                                activeClass="nav-link-active"
                                spy={true}
                                to="contact"
                                smooth="true"
                                offset={-200}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;