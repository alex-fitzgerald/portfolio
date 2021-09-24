import React, { useState, useEffect } from 'react'
import Button from './Button.jsx'
import styles from './Header.css'

function Header(props){
    const [day, setDay] = useState("Hey")

    useEffect(() => {
        let currentDay = new Date();
        let today = currentDay.getDay();
        let weekString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        setDay(", happy " + weekString[today])
    })

    return (
        <div className="header">
            <div className="banner">
             <div>
                <h1>Hey{day}</h1>
                <h2>My name is Alex, welcome to my portfolio</h2>
                </div>
            </div>
        </div>
    )
}

export default Header