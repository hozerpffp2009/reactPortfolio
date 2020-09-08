import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../Portfolio';
import { Link, animateScroll as scroll } from "react-scroll";

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h3>
                Review the links below<br></br>
                <span className='amazing-color'>for other projects and information</span></h3>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

        <div className="links">
        <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link></li>
            </ul>
            </div>

            <span className='footer'>Created by Joseph Arocha</span>
        </div>);
    }
}
 
export default Contact;