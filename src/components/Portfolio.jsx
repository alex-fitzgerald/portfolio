import React, { useState } from 'react';
import Button from './Button.jsx'
import Web from './Web.jsx'
import Graphic from './Graphic.jsx'
import styles from './Portfolio.css'

function Portfolio(){
    const [portfolioView, setPortfolioView] = useState(null)
    const [blurb, setBlurb] = useState("Alright, let's see some stuff!")

    function handleChoice(choice){
        setPortfolioView(choice)
    }

    function onHover(buttonHovered){
        if (buttonHovered === "Web") {
            setBlurb("Let's see some web pages and apps")
        } else if (buttonHovered === "Graphics") {
            setBlurb("Let's see some graphic design")
        } else {
            setBlurb("Let's see some stuff")
        }
    }

    function choiceStatus(){
        if (portfolioView === null) {
            return (
                <div className="choiceParent">
                    <div>
                        <Button className="port-button" name="Web" color="white" onChoice={handleChoice} onHover={onHover} /></div>
                        <div className="buttonDivider"></div>
                        <Button name="Graphics"
                        className="port-button"  color="white" onChoice={handleChoice} onHover={onHover}/>
                </div>     
            )
        } else {
            return (
            <div className="portfolioNav">
                <Button name="Web" color="white" className="port-button" onChoice={handleChoice} onHover={onHover}/>
                        <div className="buttonDivider"></div>
                <Button name="Graphics" 
                className="port-button" color="white" onChoice={handleChoice} onHover={onHover} marginProp="marginTop:-2px" />
            </div>     
            )
        }
    }

    function renderPortfolio(){
        if (portfolioView === "Web"){
            return <Web />
        } if (portfolioView === "Graphics"){
            return <Graphic />
        } else {
            return null
        }
    }

    return (
        <div className="portfolio">
            <div className="port-blurb">
                <h1>Portfolio</h1>
                <h3>{blurb}</h3>
            </div>
            { choiceStatus() }
            { renderPortfolio() }
        </div>
    )
}

export default Portfolio