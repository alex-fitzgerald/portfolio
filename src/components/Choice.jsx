import React from 'react'
import Button from './Button.jsx'


function Choice(props){
    return (
        <div>
            <h1>Here's a snapshot of what I do</h1>
            <h3>Under Skills you'll find the technologies I use a lot of</h3>
            <h3>Under Portfolio you'll a couple of my recent Web and Graphic Design projects</h3>
            <div className="choiceParent">
                <Button 
                    name="Skills"
                    color="white"
                    onChoice={props.onChoice}
                
                />
                <Button 
                    name="Portfolio"
                    color="white"
                    onChoice={props.onChoice}
                />
            </div>        
        </div>
    )
}

export default Choice