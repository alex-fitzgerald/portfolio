import React from 'react'
import htmlimg from '../img/html5.png'
import cssimg from '../img/css.png'
import jsimg from '../img/javascript.png'
import reimg from '../img/react.png'
import nodeimg from '../img/node.png'
import mongoimg from '../img/mongodb.png'
import apiimg from '../img/api.png'
import oauthimg from '../img/Oauth_logo.svg.png'
import psimg from '../img/photosho.png'
import aiimg from '../img/illustrator.png'
import idimg from '../img/indesign.png'
import primg from '../img/premiere.png'
import aeimg from '../img/aftereffects.png'
import xdimg from '../img/experience.png'
import styles from './Skills.css'

function Languages(){
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="languages">
                <div className="languageschild">
                    <h2>Frontend</h2>
                    <div>
                        <img src={htmlimg} ALT="A TECHNOLOGY" />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src={cssimg} ALT="A TECHNOLOGY" />
                        <p>CSS3 & Bootstrap</p>
                    </div>
                    
                    <div>
                        <img src={jsimg} ALT="A TECHNOLOGY" />
                        <p>JavaScript & JQuery</p>
                    </div>
                    <div>
                        <img src={reimg} ALT="A TECHNOLOGY" />
                        <p>React.js</p>
                    </div>
                </div>     
                <div className="languageschild">
                    <h2>Backend</h2>
                    <div>
                        <img src={nodeimg} ALT="A TECHNOLOGY" />
                        <p>Node.js & Express</p>
                    </div>
                    
                    <div>
                        <img src={mongoimg} ALT="A TECHNOLOGY" />
                        <p>MongoDB and Mongoose</p>
                    </div>
                    
                    <div>
                        <img src={apiimg} ALT="A TECHNOLOGY" />
                        <p>RESTful APIs</p>
                    </div>                
                    <div>
                        <img src={oauthimg} ALT="A TECHNOLOGY" />
                        <p>Authentication and OAuth 2.0</p>
                    </div>
                </div>
                <div className="languageschild">
                    <h2>Creative Tools</h2>
                    <div>
                        <img src={xdimg} ALT="A TECHNOLOGY" />
                        <p>Adobe Experience Designer</p>
                    </div>
                    <div>
                        <img src={psimg} ALT="A TECHNOLOGY" />
                        <p>Adobe Photoshop</p>
                    </div>                
                    <div>
                        <img src={aiimg} ALT="A TECHNOLOGY" />
                        <p>Adobe Illustrator</p>
                    </div>                  
                    <div>
                        <img src={idimg} ALT="A TECHNOLOGY" />
                        <p>Adobe InDesign</p>
                    </div>                  
                    <div>
                       <img src={primg} ALT="A TECHNOLOGY" />
                        <p>Adobe Premiere Pro</p>
                    </div>
                    <div>
                        <img src={aeimg} ALT="A TECHNOLOGY" />
                        <p>Adobe After Effects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages