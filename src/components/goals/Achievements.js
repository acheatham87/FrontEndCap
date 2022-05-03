import React, { useEffect, useState } from "react";
import "./Achievements.css"
import { getCompletedGoals, deleteGoal } from "../../modules/GoalManager";
import { AchievementCard } from "./AchievementCard";
import { useNavigate } from "react-router-dom";

export const Achievements = () => {

    const [goals, setGoals] = useState([])
    const currentUser = sessionStorage.getItem("level_user")
    const navigate = useNavigate()
    
    const handleDeleteGoal = (id, currentUser) => {
        deleteGoal(id).then(() => getCompletedGoals(currentUser).then(setGoals))
    }

    const ifAchievements = [
        <>
            <h2> Your Achievments </h2>
            <h4>It appears that you have no completed goals in your profile</h4>
        </>,
        <>
            <div className="achievement-list">
                <h2> Your Achievments </h2>
                <div className="achievement-list-content">
                    {goals.map(g => <AchievementCard
                             key={g.id}
                             goal={g}
                             handleDeleteGoal={handleDeleteGoal}/>                       
                    )}
                </div>
            </div>           
        </>        
    ]

    const getGoals = (currentUser) => {
        return getCompletedGoals(currentUser).then(g => {
            setGoals(g)
        })
    }

    
    useEffect(() => {
        getGoals(currentUser);
    }, [])

    return (
        <>
        {goals.length > 0 ? ifAchievements[1] : ifAchievements[0]}
        </>
    )
}