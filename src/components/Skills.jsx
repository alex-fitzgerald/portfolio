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

function Languages(){
    return (
        <div>
            <h1>Skills</h1>
            <div className="languages">
                <div className="languageschild">
                    <h2>Frontend</h2>
                    <div>
                        <img src={htmlimg} />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src={cssimg} />
                        <p>CSS3 & Bootstrap</p>
                    </div>
                    
                    <div>
                        <img src={jsimg} />
                        <p>JavaScript & JQuery</p>
                    </div>
                    <div>
                        <img src={reimg} />
                        <p>React.js</p>
                    </div>
                </div>     
                <div className="languageschild">
                    <h2>Backend</h2>
                    <div>
                        <img src={nodeimg} />
                        <p>Node.js & Express</p>
                    </div>
                    
                    <div>
                        <img src={mongoimg} />
                        <p>MongoDB and Mongoose</p>
                    </div>
                    
                    <div>
                        <img src={apiimg} />
                        <p>RESTful APIs</p>
                    </div>                
                    <div>
                        <img src={oauthimg} />
                        <p>Authentication and OAuth 2.0</p>
                    </div>
                </div>
                <div className="languageschild">
                    <h2>Creative Tools</h2>
                    <div>
                        <img src={xdimg} />
                        <p>Adobe Experience Designer</p>
                    </div>
                    <div>
                        <img src={psimg} />
                        <p>Adobe Photoshop</p>
                    </div>                
                    <div>
                        <img src={aiimg} />
                        <p>Adobe Illustrator</p>
                    </div>                  
                    <div>
                        <img src={idimg} />
                        <p>Adobe InDesign</p>
                    </div>                  
                    <div>
                       <img src={primg} />
                        <p>Adobe Premiere Pro</p>
                    </div>
                    <div>
                        <img src={aeimg} />
                        <p>Adobe After Effects</p>
                    </div>
                </div>
                <div style={{marginBottom:400}}></div>
            </div>
        </div>
    )
}

export default Languages