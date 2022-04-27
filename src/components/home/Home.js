import React, { useState, useEffect } from "react";
import { DisplayCurrentGoals } from "../goals/DisplayCurrentGoals";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    const handleSetClick = (event) => {
        event.preventDefault()
        navigate('/NewGoals')
    }

    useEffect(() => {
        setUserName(JSON.parse(sessionStorage.getItem("level_user_name")).split(" ")[0]);
    }, [])

    return(  
        <>
            <h2 className="welcome">Welcome, {userName}</h2>
            {/* Would like to have this message appear on first login, otherwise it displays your current goals */}
            <h4 className="new-user-message">Thank you for choosing LEVEL!  We are an app designed to help you achieve proportional strength through weight training.
            <br/><br/>How it works:<br/><br/>
            We ask you to enter one of your known lifts weight.  We then take that weight and calculate other major lifts with ideal goal weights to build a balanced body.
            <br/>Click on the button below to get started<br/>
            </h4>
            <button type="button" className="new-profile-button" onClick={handleSetClick}>Set your Goals</button>
            <DisplayCurrentGoals />
        </>
        )
}