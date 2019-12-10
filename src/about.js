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
            {/* <div className="profile-content-outer">
                <div className="profile-content-inner">
                    <div className="profile-content">
                        <AboutProfile />
                        <AboutProfile />
                        <AboutProfile />  
                        <AboutProfile />
                        <AboutProfile />
                        <AboutProfile /> 
                    </div>
                </div>
            </div> */}
            <div className="new-try">
                <AboutProfile />
                <AboutProfile />
                <AboutProfile />
                <AboutProfile />
                <AboutProfile />
                <AboutProfile />
            </div>
                
               
            
                        
                   
               
           
            
           
        </div>
    );
}

export default About;