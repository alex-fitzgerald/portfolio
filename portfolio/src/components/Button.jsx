import React from "react"

function Button(props){ 
  function handleClick() {
    props.onChoice(props.name);
  }

    return (
        <div>
            <p onClick={handleClick} className={`button ${props.color}`}>{props.name}</p>
        </div>
    )
}


export default Button