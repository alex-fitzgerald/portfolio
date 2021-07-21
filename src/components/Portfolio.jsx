import React, { useState } from 'react';
import Button from './Button.jsx'
import Web from './Web.jsx'
import Graphic from './Graphic.jsx'

function Portfolio(){
    const [portfolioView, setPortfolioView] = useState(null)
    const [blurb, setBlurb] = useState("Alright, let's show you some stuff!")

    function handleChoice(choice){
        setPortfolioView(choice)
    }

    function onHover(buttonHovered){
        if (buttonHovered === "Web Development") {
            setBlurb("Alright, let's show some web apps!")
        } else if (buttonHovered === "Graphic Design") {
            setBlurb("Alright, let's show some graphic design!")
        } else {
            setBlurb("Alright, let's show you some stuff!")
        }
    }

    function choiceStatus(){
        if (portfolioView === null) {
            return (
                <div className="choiceParent">
                    <div>
                        <Button name="Web Development" color="white" onChoice={handleChoice} onHover={onHover} />
                        <div className="buttonDivider"></div>
                        <Button name="Graphic Design" color="white" onChoice={handleChoice} onHover={onHover}/>
                    </div>     
                </div>     
            )
        } else {
            return (
            <div className="portfolioNav">
                <Button name="Web Development" color="white" onChoice={handleChoice} onHover={onHover}/>
                        <div className="buttonDivider"></div>
                <Button name="Graphic Design" color="white" onChoice={handleChoice} onHover={onHover} marginProp="marginTop:-2px" />
            </div>     
            )
        }
    }

    function renderPortfolio(){
        if (portfolioView === "Web Development"){
            return <Web />
        } if (portfolioView === "Graphic Design"){
            return <Graphic />
        } else {
            return null
        }
    }

    return (
        <div>
            <h1>Portfolio</h1>
            <h3>{blurb}</h3>
            { choiceStatus() }
            { renderPortfolio() }
        </div>
    )
}

export default Portfolio