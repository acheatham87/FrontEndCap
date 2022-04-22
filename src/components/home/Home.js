import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

let userName = JSON.parse(sessionStorage.getItem("level_user_name"))

userName = userName.split(" ")[0]

export const Home = () => {
    return(  
        <>
        <p className="welcome">Welcome, {userName}</p>
        </>
        )
}