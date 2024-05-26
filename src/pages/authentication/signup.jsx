import React, { useState } from "react";
import './authentication.css'
import { Link } from "react-router-dom";
import Home from "../Home/home";

export default function SignUp(){

    const styles2 = {
        left: "50%"
    }

    const hoverElement = <div className="hover" style={styles2}></div>

    const [hover, setHover] = React.useState(hoverElement)

    function moveHoverRight() {
        setHover(hoverElement)
    }

    function moveHoverLeft() {
        setHover(hoverElement)
    }

    const name = React.useRef()
    const email = React.useRef()
    const password = React.useRef()
    const SignUp = localStorage.getItem("signUp")
    const [goToHome, setGoToHome] = React.useState(false)

    React.useEffect(function () {
        if (SignUp) {
            setGoToHome(true)
        }
    })
    function moveToHome(){
        if(name.current.value&&email.current.value&&password.current.value){
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)
            alert("Your New Account is ready!!")
            window.location.reload()
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
                            <input type="text" name="username" id="username" placeholder="Username" required ref={name}/>
                        </div>

                        <div className="input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="username" placeholder="Email" required ref={email}/>
                        </div>
                    
                        <div className="input">
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password" id="username" placeholder="Password" required ref={password}/>
                        </div>
                    </div>
                    <div className="container-buttons">
                        {/* <Link to="/" className="button-link"><button id="authentication" type="button" className="switch-btn" onClick={moveToHome}>Sign Up</button></Link> */}
                        <button id="authentication" type="button" className="switch-btn" onClick={moveToHome}>Sign Up</button>
                    </div>
                    <div className="container-noaccount">Already have an account? <span><Link to="/Authentication" className="span-signup">Log In</Link></span></div>
            </div>
            }
        </div>
    </div>
    )
}