import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../Portfolio';

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

            <span className='footer'>Created by Joseph Arocha</span>
        </div>);
    }
}
 
export default Contact;