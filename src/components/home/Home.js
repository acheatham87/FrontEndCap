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
        <h2 className="welcome">Welcome, {userName}</h2>
        <h3> Your current goals:</h3>

        </>
        )
}