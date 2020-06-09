// Code SimplerComponent Here
import React from 'react'

export default function SimplerComponent(props) {
    return (
        <div onClick={props.handleClick}>
            I am just happy
        </div>
    )
}

//The readme shows the creation of a functional component in the form of an anonymous function
//but it looks like it can also be written like a regular function, so that's nifty