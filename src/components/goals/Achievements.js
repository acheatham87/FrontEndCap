import React, { useEffect, useState } from "react";
import "./Achievements.css"
import { getAchievementsByUserId } from "../../modules/AchievementManager";
import { AchievementCard } from "./AchievementCard";

export const Achievements = () => {

    const [achievements, setAchievements] = useState([])
    const currentUser = sessionStorage.getItem("level_user")
    
    // const handleDeleteAchievement = (id, currentUser) => {
    //     deleteAchievement(id).then(() => getAchievements(currentUser).then(setAchievements))
    // }

    const ifAchievements = [
        <>
            <h2> Your Achievments </h2>
            <h4>It appears that you have no completed achievements in your profile</h4>
        </>,
        <>
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
        {achievements.length > 0 ? ifAchievements[1] : ifAchievements[0]}
        </>
    )
}