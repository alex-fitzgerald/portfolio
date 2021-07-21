import React from "react"

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
            <p 
              onMouseEnter={handleHover} 
              onMouseLeave={handleLeave} 
              onClick={handleClick} 
              className={`button ${props.color}`}>{props.name}
            </p>
        </div>
    )
}


export default Button