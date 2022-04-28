import React, { useState, useEffect } from "react";
import { DisplayCurrentGoals } from "../goals/DisplayCurrentGoals";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { getCurrentGoals } from "../../modules/GoalManager";

export const Home = () => {
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()
    const [currentGoals, setCurrentGoals] = useState([])
    const currentUser = sessionStorage.getItem("level_user")

    const handleSetClick = (event) => {
        event.preventDefault()
        navigate('/NewGoals')
    }

    const ifGoals = [  
        <>         
            <h2 className="welcome">Welcome, {userName}</h2>
            <h4 className="new-user-message">Thank you for choosing LEVEL!  We are an app designed to help you achieve proportional strength through weight training.
            <br/><br/>How it works:<br/>
            We ask you to enter one of your known lifts weight.  We then take that weight and calculate ideal goal weights for other major lifts to help you build a balanced body.
            <br/><br/>Click on the button below to get started</h4>
            <button type="button" className="new-profile-button" onClick={handleSetClick}>Set your Goals</button></> ,
        <>
            <h2 className="welcome">Welcome, {userName}</h2>
            <DisplayCurrentGoals />
        </>
    ]

    const getGoals = (currentUser) => {
        return getCurrentGoals(currentUser).then(g => {
            setCurrentGoals(g)
        })
    }

    useEffect(() => {
        setUserName(JSON.parse(sessionStorage.getItem("level_user_name")).split(" ")[0]);
    }, [])

    useEffect(() => {
        getGoals(currentUser)
    }, [])

    return( 
        <>
        {currentGoals.length > 0 ? ifGoals[1] : ifGoals[0]}
        </>
        )
}