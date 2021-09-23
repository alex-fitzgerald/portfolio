import React, { useState, useEffect } from 'react'
import Button from './Button.jsx'


function Choice(props){
    const [day, setDay] = useState("Hey")
    const [blurb, setBlurb] = useState("Here's some stuff I know")

    useEffect(() => {
        let currentDay = new Date();
        let today = currentDay.getDay();
        let weekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        setDay(", happy " + weekString[today])
    })

    function onHover(buttonHovered){
        if (buttonHovered === "Skills") {
            setBlurb("Here you'll a list of some of the web and graphic techologies I  use")
        } else if (buttonHovered === "Portfolio") {
            setBlurb("Here you'll find a some recent web and graphic design projects I've completed")
        } else if (buttonHovered === "CV") {
            setBlurb("Here you'll find my CV")
        } else {
            setBlurb("Here's some stuff I know")
        }
    }



    return (
        <div>
            <h1>Hey{day}!</h1>
            <h3 className="nav-blurb">{blurb}</h3>
            <div className="choiceParent">
                <Button 
                    name="Skills"
                    color="white"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
                <Button 
                    name="CV"
                    color="white"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
                <Button 
                    name="Portfolio"
                    color="white"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
            </div>        
        </div>
    )
}

export default Choice