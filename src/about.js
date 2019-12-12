import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Avatar from './images/male-avatar.jpg';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faQuora } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import AboutProfile from './aboutprofile.js';


function About(){
    return(
        <div className="blogdo1 noscroll">
            <div className="new-try">
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Murphy" 
                    specialAt="Web Designing" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Vishnu Varthan L R" 
                    specialAt="Full Stack Development" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Vigneshwar M" 
                    specialAt="Full Stack Development" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Vignesh R" 
                    specialAt="Full Stack Development" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Sethupathi P" 
                    specialAt="Full Stack Development" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
                <AboutProfile 
                    imgSource={Avatar}  
                    name="Santosh R" 
                    specialAt="Full Stack Development" 
                    postCount="500" 
                    contributionCount="800" 
                    fbLink="#" 
                    twLink="#" 
                    gitLink="#" 
                    codeLink="#" 
                />
            </div>
        </div>
    );
}

export default About;