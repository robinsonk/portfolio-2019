import React, { Component } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    name: 'GitHub',
                    link: 'https://github.com/robinsonk',
                    icon: ['fab', 'github-alt'],
                    class: 'social-icon',
                },
                {
                    name: 'AngelList',
                    link: 'https://angel.co/kileen-robinson',
                    icon: ['fab', 'angellist'],
                    class: 'social-icon',
                },
                {
                    name: 'Email',
                    link: 'mailto:kileen.robinson@gmail.com',
                    icon: 'envelope',
                    class: 'mail-icon',
                },
                {
                    name: 'Twitter',
                    link: 'https://twitter.com/kileenrobinson',
                    icon: ['fab', 'twitter'],
                    class: 'social-icon',
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/kileenrobinson/',
                    icon: ['fab', 'linkedin'],
                    class: 'social-icon',
                }
            ]
        }
    }
    render() {
        return (
            <div className="contact-container" id="contact">
                <h2 className="contact-header">Where to find me</h2>
                <p className="contact-content">
                    Feel free to get in touch via social media or email. I look forward to chatting with you!
                </p>
                <div className="contact-icons">
                    {this.state.links.map(link => {
                        return (
                            <a href={link.link} title={link.name}>
                                <FontAwesomeIcon icon={link.icon} className={link.class}/>
                            </a>
                        )
                    })}
                </div>
                <div className="footer">
                    Made with love using React <FontAwesomeIcon icon={['fab', 'react']} className="react-icon"/>
                </div>
            </div>
        )
    }
}

export default Contact;