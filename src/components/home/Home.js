import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    const [userName, setUserName] = useState("")

    useEffect(() => {
        setUserName(JSON.parse(sessionStorage.getItem("level_user_name")).split(" ")[0]);
    }, [])

    return(  
        <>
        <p className="welcome">Welcome, {userName}</p>
        </>
        )
}