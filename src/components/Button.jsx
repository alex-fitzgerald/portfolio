import React from "react"
import styles from "./Button.css"

function Button(props){ 
  function handleClick() {
    props.onChoice(props.name);
  }

  function handleHover() {
    props.onHover(props.name);
  }

  function handleLeave() {
    props.onHover(" ");
  }

    return (
        <div>
            <button 
              onMouseEnter={handleHover} 
              onMouseLeave={handleLeave} 
              onClick={handleClick} 
              // className={`button ${props.color}`}>{props.name}
              className={`button ${props.color}`}>{props.name}
            </button>
        </div>
    )
}


export default Button