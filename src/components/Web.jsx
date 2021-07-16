import React from 'react'

function Web(){
    return (
        <div>
            <h2>Web Development</h2>
            <div className="web-development-parent">
                <div className="web-development">
                    <h3>To Do List App</h3>
                    <iframe 
                        scrolling="no"
                        title="To Do List App" 
                        src="https://fast-chamber-10628.herokuapp.com/">
                    </iframe>
                </div>
                <div style={{marginBottom:200}} className="web-development">
                    <h3>Super Hero Name Generator App</h3>
                    <iframe 
                        frameborder="0"
                        height="800px"
                        title="Superhero Generator App" 
                        src="http://superheroes-nz.herokuapp.com/">    
                    </iframe>
                </div>
            </div>
        </div>
    )
}


export default Web