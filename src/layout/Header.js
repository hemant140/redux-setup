import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <ul class="menu-items">
                    <li><Link to="/">Stopwatch</Link></li>
                    <li><Link to="/user">Users</Link></li>
                </ul>
                <h1>Navbar</h1>
            </div>
        </nav>
    )
}

export default Header
