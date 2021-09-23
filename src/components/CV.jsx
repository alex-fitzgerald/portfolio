import React from 'react'
import cv from '../img/Alexander Fitzgerald.pdf'


function CV(){
    return (
        <div className="cv">
         <h1>My CV</h1>
            <iframe 
                title="Alex's CV" 
                src={cv}
                allowFullScreen="true"
                ></iframe>
        </div>
    )   
}

export default CV