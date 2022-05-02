import React, { useEffect, useState } from "react";
import "./Achievements.css"
import { getCompletedGoals, deleteGoal } from "../../modules/GoalManager";
import { AchievementCard } from "./AchievementCard";

export const Achievements = () => {

    const [goals, setGoals] = useState([])
    const currentUser = sessionStorage.getItem("level_user")
    
    const getGoals = (currentUser) => {
        return getCompletedGoals(currentUser).then(g => {
            setGoals(g)
        })
    }

    const handleDeleteGoal = (id, currentUser) => {
        deleteGoal(id).then(() => getCompletedGoals(currentUser).then(setGoals))
    }
    
    useEffect(() => {
        getGoals(currentUser);
    }, [])

    return (
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
    )
}