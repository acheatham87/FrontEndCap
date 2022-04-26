import React, {useState} from "react";
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar";
import "./Level.css";

export const Level = () => {

    //creates a useState for user authentication
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("level_user") !== null);

    //creates function to set session storage for currently logged in user
    const setAuthUser = (user) => {
        sessionStorage.setItem("level_user", JSON.stringify(user.id))
        sessionStorage.setItem("level_user_name", JSON.stringify(user.name))
        sessionStorage.setItem("level_user_gender", JSON.stringify(user.gender))
        setIsAuthenticated(sessionStorage.getItem("level_user") !== null)
    }

    //creates function to clear session storage 
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("level_user") !== null)
    }

    return (
        <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </>
    )
}