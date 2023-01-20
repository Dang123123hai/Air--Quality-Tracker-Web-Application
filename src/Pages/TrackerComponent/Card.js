import React from "react";
import '../../App.css'



const Card =(props)=>{
    return(
        <div className = {`card
            ${props.AQ > 49 && props.AQ < 100? 'b' :
            props.AQ > 99 && props.AQ < 150 ? 'c' :
            props.AQ < 50? 'a' :
            props.AQ > 149 && props.AQ <200? 'd' :
            props.AQ >= 200? 'f': 'e'}`}>

            {props.children}
        </div>
    )
}
export default Card