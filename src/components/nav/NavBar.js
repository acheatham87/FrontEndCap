import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({clearUser}) => {
    const location = useLocation();
    return (
        <nav>
            <ul className="navBar">
                <li className="navBar_item">
                    <Link className={`navBar__link ${location.pathname === '/Home' ? 'active':''}`} to="/Home">Home</Link>
                </li>
                <li className="navBar_item item_left">
                {sessionStorage.getItem("level_user") != null ? <Link className="navbar__link" to="/login" onClick={clearUser}>Logout</Link> : ''}
                </li>
            </ul>
        </nav>
    )
}