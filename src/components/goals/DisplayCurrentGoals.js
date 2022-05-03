import React, { useEffect, useState } from "react";
import "./DisplayCurrentGoals.css"
import { getCurrentGoals, updateGoal, deleteGoal } from "../../modules/GoalManager";
import { CurrentGoals } from "./CurrentGoals";
import { addAchievement } from "../../modules/AchievementManager";

export const DisplayCurrentGoals = ({handleUpdateHome, currentGoals}) => {

    const [goals, setGoals] = useState([])
    const currentUser = sessionStorage.getItem("level_user")

    const getGoals = (currentUser) => {
        return getCurrentGoals(currentUser).then(g => {
            setGoals(g)
        })
    }

    console.log(handleUpdateHome)  
    
    const handleCompleted = (goal, currentUser) => {
        goal.completed === true ? goal.completed = false : goal.completed = true;
        goal.completedTimestamp = new Date()
        updateGoal(goal).then(() => getCurrentGoals(currentUser).then(setGoals).then(() => {
            addAchievement({
                userId: parseInt(currentUser),
                goalId: goal.id
            })
        }).then(() => {
           handleUpdateHome(currentUser)
        }))
    }

    const handleDeleteGoal = (id, currentUser) => {
        deleteGoal(id).then(() => getGoals(currentUser)).then(() => {
            handleUpdateHome(currentUser)})
    }    

    useEffect(() => {
        getGoals(currentUser).then();
    }, [currentGoals])

    return (
        <>
            <div className="current-goal-list">
                <h2> Your Goals </h2>
                <div className="current-goal-list-content">
                    {goals?.map(g => <CurrentGoals
                             key={g.id}
                             goal={g}
                             handleCompleted={handleCompleted}
                             handleUpdateHome={handleUpdateHome}
                             handleDeleteGoal={handleDeleteGoal}
                            />                       
                    )}
                </div>
            </div>           
        </>
    )
}