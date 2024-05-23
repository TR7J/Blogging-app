import React, { useState } from "react";
import './authentication.css'

export default function Authentication(){
    const styles1 = {
        left: "0%"
    }

    const styles2 = {
        left: "50%"
    }

    const hoverElement = <div className="hover" style={styles1}></div>
    const hoverElement2 = <div className="hover" style={styles2}></div>

    const [hover, setHover] = React.useState(hoverElement)

    function moveHoverRight() {
        setHover(hoverElement2)
    }

    function moveHoverLeft() {
        setHover(hoverElement)
    }


    return(
        <div className="container">
            <div className="container-header">
                {hover}
                <div className="log-in" onClick={moveHoverLeft}>Log In</div>
                <div className="sign-up" onClick={moveHoverRight}>Sign up</div>
            </div>
            <div className="container-inputs">
                <div className="input">
                    <label htmlFor="">Username:</label>
                    <input type="text" name="" id="" placeholder="Username" />
                </div>

                {hover === hoverElement ? <div></div> : <div className="input">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="" id="" placeholder="Email"/>
                </div>}
               
                <div className="input">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
            </div>
            <div className="container-forgotpass">Forgot Password? <span>Click here</span></div>
            <div className="container-buttons">
                <button type="button" className="switch-btn">Log In</button>
                <button type="button" className="switch-btn">Sign Up</button>
            </div>
        </div>
    )
}