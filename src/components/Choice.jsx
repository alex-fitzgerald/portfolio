import React, { useState, useEffect } from 'react'
import Button from './Button.jsx'
import styles from './Choice.css'


function Choice(props, styles){
    const [blurb, setBlurb] = useState(" my CV and some examples of my work")
    const [choice, setChoice] = useState(null)

    function onHover(buttonHovered){
        if (buttonHovered === "Skills") {
            setBlurb(" the languages, technologies and tools I use")
            setChoice("blue-text")
        } else if (buttonHovered === "Portfolio") {
            setBlurb(" some examples of my work")
            setChoice("orange-text")

        } else if (buttonHovered === "CV") {
            setBlurb(" my CV")
            setChoice("pink-text")

        } else {
            // setBlurb("my CV and some examples of my work")
        }
    }

    return (
        <div class="choice">
            <h2>
                I'm a self-taught web developer and graphic designer
            </h2>
            <br />
            <div className="nav-blurb">
                <h3>
                    Here you'll find 
                    <span className={choice}> 
                    {blurb}
                    </span>
                </h3>
            </div>
            <div className="choiceParent">
                <Button 
                    name="Skills"
                    color="blue"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
                <Button 
                    name="CV"
                    color="pink"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
                <Button 
                    name="Portfolio"
                    color="orange"
                    onChoice={props.onChoice}
                    onHover={onHover}
                />
            </div>        
        </div>
    )
}

export default Choice