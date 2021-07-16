import React from 'react'
import Button from './Button.jsx'

function Header(props){
    return (
        <div>
           <h1>Kia ora,<br />I'm Alex</h1>    
           <div class="choiceParent">
             <Button 
                name="Main menu"
                color="white"
                onChoice={props.onChoice}
            />
           </div>
        </div>
    )
}

export default Header