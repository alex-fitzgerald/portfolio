import React from 'react'
import Button from './Button.jsx'


function Choice(props){
    return (
        <div>
            <h1>Let me show you what I can do</h1>
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