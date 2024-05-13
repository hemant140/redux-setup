import React from 'react'

function Header() {
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li>Users</li>
                </ul>
                <h1 class="logo">Navbar</h1>
            </div>
        </nav>
    )
}

export default Header
