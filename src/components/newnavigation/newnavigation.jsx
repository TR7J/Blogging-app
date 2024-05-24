import React from 'react'
import './newnavigation.css'

export default function NewNavigation(){
    return(
        <div>
            <nav className="nav">
                <ul className='nav-ul'>
                    <li><a href="#" className='nav-links'>Create New</a></li>
                    <li><a href="#" className='nav-links'>Categories</a></li>
                    <li><a href="#" className='nav-links'>Profile</a></li>
                    <li><a href="#" className='nav-links'>Chat Bot</a></li>
                </ul>
            </nav>
        </div>
    )
}