import React from 'react'
import './newnavigation.css'
import { Link } from 'react-router-dom'



export default function NewNavigation(){

    function logOut() {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    return(
        <div>
            <nav className="nav">
                <ul className='nav-ul'>
                    <li><Link to={'/CreateNew'} className='nav-links'>Create New</Link></li>
                    <li><Link to={'/'} className='nav-links'>Home</Link></li>
                    <li><Link to={'https://four3careercompass.streamlit.app/'} target='blank' className='nav-links'>Chat Bot</Link></li>
                    <li><Link to={'/Authentication'} className='nav-links'>Authentication</Link></li>
                    <button onClick={logOut} className='log-out'>Log Out</button>
                </ul>
            </nav>
        </div>
    )
}