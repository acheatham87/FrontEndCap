import React, {useState} from "react";
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar";
import "./Level.css";

export const Level = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("level_user") !== null);

    const setAuthUser = (user) => {
        sessionStorage.setItem("level_user", JSON.stringify(user.id))
        sessionStorage.setItem("level_user_name", JSON.stringify(user.name))
        setIsAuthenticated(sessionStorage.getItem("level_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("level_user") !== null)
    }

    return (
        <>
        <NavBar clearUser={clearUser} 
            isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} 
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}/>
            </>
    )
}