import React, { useEffect, useState } from "react";
import "./DisplayCurrentGoals.css"
import { getCurrentGoals, updateGoal } from "../../modules/GoalManager";
import { CurrentGoals } from "./CurrentGoals";

export const DisplayCurrentGoals = () => {

    const [goals, setGoals] = useState([])
    const currentUser = sessionStorage.getItem("level_user")

    const getGoals = (currentUser) => {
        return getCurrentGoals(currentUser).then(g => {
            setGoals(g)
        })
    }

    const handleCompleted = (goal, currentUser) => {
        goal.completed === true ? goal.completed = false : goal.completed = true;
        updateGoal(goal).then(() => getCurrentGoals(currentUser).then(setGoals))
    }

    useEffect(() => {
        getGoals(currentUser);
    }, [])

    return (
        <>
            <div className="current-goal-list">
                <h2> Your Goals </h2>
                <div className="current-goal-list-content">
                    {goals.map(g => <CurrentGoals
                             key={g.id}
                             goal={g}
                             handleCompleted={handleCompleted}
                            />                       
                    )}
                </div>
            </div>           
        </>
    )
}