import React, { useState, useEffect } from "react";
import { DisplayCurrentGoals } from "../goals/DisplayCurrentGoals";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { getCurrentGoals } from "../../modules/GoalManager";

export const Home = () => {

    //sets a useState for userName
    const [userName, setUserName] = useState("")

    //setting the function useNavigate to the variable navigate
    const navigate = useNavigate()

    //sets a useState for currentGoals
    const [currentGoals, setCurrentGoals] = useState([])

    //assigns the currently logged in usersId to the varibale currentUser
    const currentUser = sessionStorage.getItem("level_user")

    //function to fetch the currently logged in users goals from database and set the state of currentGoals
    const handleUpdateHome = (currentUser) => {
        getCurrentGoals(currentUser).then(g => {
            setCurrentGoals(g)
        })    
    }

    //function built to handle the onClick event of Set Your Goals, routing you to the NewGoals page
    const handleSetClick = (event) => {
        event.preventDefault()
        navigate('/NewGoals')
    }

    // an array to be used in the return to be decided upon if the currently logged in user has active goals in the database
    const ifGoals = [  
        <>   
        {/* return if no goal are found on the fetch call       */}
            <h2 className="welcome">Welcome, {userName}</h2>
            <h4 className="new-user-message">Thank you for choosing LEVEL!  We are an app designed to help you achieve proportional strength through weight training.
            <br/><br/>How it works:<br/>
            We ask you to enter one of your known lifts weight.  We then take that weight and calculate ideal goal weights for other major lifts to help you build a balanced body.
            <br/><br/>Click on the button below to get started</h4>
            <button type="button" className="new-profile-button" onClick={handleSetClick}>Set your Goals</button>
        </> ,
        <>
        {/* return if goals are in the database.  Maps the returned goals onto individual goal "cards" */}
            <h2 className="welcome">Welcome, {userName}</h2>
            <DisplayCurrentGoals handleUpdateHome={handleUpdateHome}
            currentGoals={currentGoals}/>
        </>
    ]

    useEffect(() => {
        setUserName(JSON.parse(sessionStorage.getItem("level_user_name")).split(" ")[0]);
    }, [])

    useEffect(() => {
        handleUpdateHome(currentUser)
    }, [])

    return( 
        <>
        {/* function determining which portion of the above array to return depeding on the state of currentGoals */}
        {currentGoals.length > 0 ? ifGoals[1] : ifGoals[0]}
        </>
        )
}