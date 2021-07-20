import React from 'react'

function Languages(){
    return (
        <div>
            <h1>Skills</h1>
            <div className="languages">
                <div className="languageschild">
                    <h2>Frontend</h2>
                    <div>
                        HTML5
                    </div>
                    <div>
                        CSS3 & Bootstrap
                    </div>
                    
                    <div>
                        JavaScript & JQuery
                    </div>
                    <div>
                        React.js
                    </div>
                </div>     
                <div className="languageschild">
                    <h2>Backend</h2>
                    <div>
                        Node.js & Express
                    </div>
                    
                    <div>
                        MongoDB and Mongoose
                    </div>
                    
                    <div>
                        RESTful APIs
                    </div>                
                    <div>
                        Authentication and OAuth 2.0
                    </div>
                </div>
                <div className="languageschild">
                    <h2>Creative Tools</h2>
                    <div>
                        Adobe Photoshop
                    </div>                
                    <div>
                        Adobe Illustrator
                    </div>                  
                    <div>
                        Adobe InDesign
                    </div>                  
                    <div>
                        Adobe Premiere Pro
                    </div>
                    <div>
                        Adobe After Effects
                    </div>
                </div>
                <div style={{marginBottom:200}}></div>
            </div>
        </div>
    )
}

export default Languages