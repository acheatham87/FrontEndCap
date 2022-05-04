import React, { useEffect, useState } from "react";
import "./Achievements.css"
import { getAchievementsByUserId } from "../../modules/AchievementManager";
import { AchievementCard } from "./AchievementCard";

export const Achievements = () => {

    //sets a useState for achievements
    const [achievements, setAchievements] = useState([])
    
    //sets currentUser to the userid number set in session storage
    const currentUser = sessionStorage.getItem("level_user")

    //an array to use on the return to be decided upon if the currently logged in user has any achievements in the database
    const ifAchievements = [
        <>
        {/* return for if no achievements are found on the fetch call */}
            <h2> Your Achievments </h2>
            <h4>It appears that you have no completed achievements in your profile</h4>
        </>,
        <>
        {/* return if achievements are in the database.  Maps the returned achievements onto individual achievement "cards" */}
            <div className="achievement-list">
                <h2> Your Achievments </h2>
                <div className="achievement-list-content">
                    {achievements.map(a => <AchievementCard
                             key={a.id}
                             achievement={a}
                             />                       
                    )}
                </div>
            </div>           
        </>        
    ]

    //uses getAchievementsByUserId to return achievements specific to the currently logged in user from the database and then takes the returned data and updates the state of ahcievements
    const getAchievements = (currentUser) => {
        return getAchievementsByUserId(currentUser).then(a => {
            setAchievements(a)
        })
    }
    
    useEffect(() => {
        getAchievements(currentUser);
    }, [])

    return (
        <>
        {/* function determining which portion of the above array to return depeding on the state of achievements */}
        {achievements.length > 0 ? ifAchievements[1] : ifAchievements[0]}
        </>
    )
}