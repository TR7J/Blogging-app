import React, { useState } from "react";
import './authentication.css'
import { Link } from "react-router-dom";
import Home from "../Home/home";

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

    const name = React.useRef()
    const password = React.useRef()
    const SignUp = localStorage.getItem("signUp")
    const [goToHome, setGoToHome] = React.useState(false)
    const loginName = localStorage.getItem("name")
    const loginPass = localStorage.getItem("password")

    React.useEffect(function () {
        if (SignUp) {
            setGoToHome(true)
        }
    })

    function doSignIn() {
        if (name.current.value === loginName && password.current.value === loginPass) {
            localStorage.setItem("signUp", name.current.value)
            window.location.reload()
        } else{
            alert('Wrong Details! Please Try Again')
        }
    }

    return(
        <div className="main-sign">

            <h1 className="four-three">FOUR 3</h1>   
            <div className="main-authentication">
                {goToHome ? <Home/> :
                <div className="container">
                    <div className="container-header">
                        {hover}
                        <div className="log-in" onClick={moveHoverLeft} >Log In</div>
                        <div className="sign-up">Sign up</div>
                    </div>
                    <div className="container-inputs">
                        <div className="input">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" placeholder="Username" required maxLength={10} ref={name}/>
                        </div>
                    
                        <div className="input">
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password" id="username" placeholder="Password" required ref={password}/>
                        </div>
                    </div>
                    <div className="container-forgotpass">Forgot Password? <span className="container-forgotpass span">Click here</span></div>
                    <div className="container-buttons">
                        <button id="authentication" type="button" className="switch-btn" onClick={doSignIn}>Log In</button>
                    </div>
                    <div className="container-noaccount">Don't have an account? <span><Link to="/Signup" className="span-signup">Sign up</Link></span></div>
                </div>
                }
            </div>
        </div>
    )
}