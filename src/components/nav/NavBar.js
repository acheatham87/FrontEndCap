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
                    <Link className={`navbar__link ${location.pathname === '/friends' ? 'active':''}`} to="/Goals">Goals</Link>
                </li>
                <li className="navBar_item item_left">
                    <Link className={`navbar__link ${location.pathname === '/friends' ? 'active':''}`} to="/Goals">Accomplishments</Link>
                </li>
                <li className="navBar_item item_left">
                    <Link className={`navbar__link ${location.pathname === '/friends' ? 'active':''}`} to="/Goals">Lift Details</Link>
                </li>
                <li className="navBar_item item_left">
                {sessionStorage.getItem("level_user") != null ? <Link className="navbar__link" to="/login" onClick={clearUser}>Logout</Link> : ''}
                </li>
            </ul>
        </nav>
    )
}