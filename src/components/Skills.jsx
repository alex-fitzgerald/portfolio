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
                        HTML5
                    </div>
                    <div>
                        <img src={cssimg} />
                        CSS3 & Bootstrap
                    </div>
                    
                    <div>
                        <img src={jsimg} />
                        JavaScript & JQuery
                    </div>
                    <div>
                        <img src={reimg} />
                        React.js
                    </div>
                </div>     
                <div className="languageschild">
                    <h2>Backend</h2>
                    <div>
                        <img src={nodeimg} />
                        Node.js & Express
                    </div>
                    
                    <div>
                        <img src={mongoimg} />
                        MongoDB and Mongoose
                    </div>
                    
                    <div>
                        <img src={apiimg} />
                        RESTful APIs
                    </div>                
                    <div>
                        <img src={oauthimg} />
                        Authentication and OAuth 2.0
                    </div>
                </div>
                <div className="languageschild">
                    <h2>Creative Tools</h2>
                    <div>
                        <img src={xdimg} />
                        Adobe Experience Designer
                    </div>
                    <div>
                        <img src={psimg} />
                        Adobe Photoshop
                    </div>                
                    <div>
                        <img src={aiimg} />
                        Adobe Illustrator
                    </div>                  
                    <div>
                        <img src={idimg} />
                        Adobe InDesign
                    </div>                  
                    <div>
                       <img src={primg} />
                        Adobe Premiere Pro
                    </div>
                    <div>
                        <img src={aeimg} />
                        Adobe After Effects
                    </div>
                </div>
                <div style={{marginBottom:200}}></div>
            </div>
        </div>
    )
}

export default Languages