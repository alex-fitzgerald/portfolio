import React, { useState } from 'react';
import Button from './Button.jsx'
import Web from './Web.jsx'
import Graphic from './Graphic.jsx'

function Portfolio(){
    const [portfolioView, setPortfolioView] = useState(null)

    function handleChoice(choice){
        setPortfolioView(choice)
    }

    function choiceStatus(){
        if (portfolioView === null) {
            return (
                <div className="choiceParent">
                    <div>
                        <Button name="Web Development" color="white" onChoice={handleChoice} />
                        <div className="buttonDivider"></div>
                        <Button name="Graphic Design" color="white" onChoice={handleChoice} />
                    </div>     
                </div>     
            )
        } else {
            return (
            <div className="portfolioNav">
                <Button name="Web Development" color="white" onChoice={handleChoice} />
                        <div className="buttonDivider"></div>
                <Button name="Graphic Design" color="white" onChoice={handleChoice} marginProp="marginTop:-2px" />
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
            { choiceStatus() }
            { renderPortfolio() }
        </div>
    )
}

export default Portfolio