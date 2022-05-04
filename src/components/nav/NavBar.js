import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({clearUser}) => {
    const location = useLocation();
    return (
        <nav>
            <ul className="navBar">
                <img className="navLogo" src={'./images/levelLogo.png'}/>
                <li className="navBar_item">
                    <Link className={`navBar__link ${location.pathname === '/Home' ? 'active':''}`} to="/Home">Home</Link>
                </li>
                <li className="navBar_item item_left">
                    <Link className={`navbar__link ${location.pathname === '/NewGoals' ? 'active':''}`} to="/NewGoals">New Goal</Link>
                </li>
                <li className="navBar_item item_left">
                    <Link className={`navbar__link ${location.pathname === '/Achievements' ? 'active':''}`} to="/Achievements">Achievements</Link>
                </li>
                <li className="navBar_item item_left">
                    <Link className={`navbar__link ${location.pathname === '/LiftDetails' ? 'active':''}`} to="/LiftDetails">Lift Details</Link>
                </li>
                <li className="navBar_item item_left">
                {sessionStorage.getItem("level_user") != null ? <Link className="navbar__link" to="/login" onClick={clearUser}>Logout</Link> : ''}
                </li>
            </ul>
        </nav>
    )
}