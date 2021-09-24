import React, { useState } from 'react'

function Web(){
    const [showPages, setShowPages] = useState(false)
    const [showApps, setShowApps] = useState(false)

    function toggle(choice) {
        if (choice === "Pages") {
            setShowPages(!showPages)
            setShowApps(false)
        }
        else if (choice === "Apps") {
            setShowPages(false)
            setShowApps(!showApps)
        }
    }  

    return (
        <div>
            <h2>Web Development</h2>
            <div class="pages">
                <h2 onClick={() => toggle("Pages")}>Pages {!showPages ? "↓" : "↑"}</h2>
                {showPages ? 
                <div className="web-development-parent">
                    <div className="web-development">
                        <h3>Client Resources page (WIP)</h3>
                        <iframe 
                            scrolling="yes"
                            title="Employer Resources page" 
                            src="https://nxtstep.co.nz/advice/63">
                        </iframe>
                    </div>
                    

                    <div className="web-development">
                        <h3>Spruced up client page - Countdown</h3>
                        <iframe 
                            scrolling="yes"
                            title="Spruced up client page" 
                            src="https://nxtstep.co.nz/employerProfile/countdown">
                        </iframe>
                    </div>
                 
                    <div className="web-development">
                        <h3>Simple Event Signup page (WIP)</h3>
                        <iframe 
                            scrolling="no"
                            title="Simple Event Signup page" 
                            src="https://nxtstep.co.nz/employerProfile/154">
                        </iframe>
                    </div>

                    <div className="web-development">
                        <h3>Spruced up client page - Genesis Energy</h3>
                        <iframe 
                            scrolling="yes"
                            title="Spruced up client page" 
                            src="https://nxtstep.co.nz/employerProfile/genesis">
                        </iframe>
                    </div>

                    <div className="web-development">
                        <h3>Spruced up client page - Mars NZ</h3>
                        <iframe 
                            scrolling="yes"
                            title="Spruced up client page" 
                            src="https://nxtstep.co.nz/employerProfile/mars-new-zealand">
                        </iframe>
                    </div>
                    </div> : null }
                    </div> 
                    <div class="apps">
                    <h2 onClick={() => toggle("Apps")}>Apps {!showApps ? "↓" : "↑"}</h2>
                    {showApps ? 
                <div className="web-development-parent">


                    <div style={{marginBottom:200}} className="web-development">
                        <h3>Random Daily Goal and Reminder App</h3>
                        <iframe 
                            frameborder="0"
                            height="800px"
                            title="Goals and Reminders App" 
                            src="https://tranquil-meadow-04254.herokuapp.com//">    
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

                    <div style={{marginBottom:200}} className="web-development">
                        <h3>Simple To Do List</h3>
                        <iframe 
                            scrolling="no"
                            title="To Do List App" 
                            src="https://fast-chamber-10628.herokuapp.com/">
                        </iframe>
                    </div>
                </div> : null }
            </div>
        </div>
    )
}


export default Web