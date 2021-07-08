import React from "react"
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1 className="headerTitle">
                    Alex Webportfolio
                </h1>
            </div>
            <div>
                <nav className="nav">
                    <h2 className="navItem">My Projects</h2>
                    <h2 className="navItem">About Me</h2>
                </nav>
            </div>
        </header>
    )
}

export default Header;