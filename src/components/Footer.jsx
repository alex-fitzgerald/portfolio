import React from 'react'
import styles from './Footer.css'
import profile from '../img/me.png'


function Footer(){
    return(
        <div className="footer">
        <div>
            <div>
                <img src={profile} alt="Hi!" />
            </div>
            <div>
                <h2>Alex Fitzgerald</h2>
                <h3>Fullstack Web Developer and Graphic Designer</h3>
                <a href="mailto:fitzgerald.s.alexander@gmail.com">fitzgerald.s.alexander@gmail.com</a><br />
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/alexanderfitzgerald/" target="_blank">Contact me on LinkedIn</a><br />
                <a href="tel:+6421941738">M: +64 21 941 738</a><br />
                </div>
            </div>
        </div>
    )
}

export default Footer