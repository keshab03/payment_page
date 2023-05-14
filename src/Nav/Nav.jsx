import React from 'react'
import './nav.css'
const Nav = () => {
    return (
        <div id='nav'>
            <div id='div1'>
                <span id='title'>E D Y O D A</span>
                <span className='drop'>Courses <i class="fa-solid fa-chevron-down"></i></span>
                <span className='drop'>Programs <i class="fa-solid fa-chevron-down"></i></span>
            </div>
            <div id='div2'>
            <i class="fa-solid fa-magnifying-glass"></i>
                <button id='login'>Log in</button>
                <button id='join'>JOIN NOW</button>
            </div>
        </div>
    )
}
export default Nav
