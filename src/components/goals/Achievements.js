import React, { useEffect, useState } from "react";
import "./Achievements.css"
import { getAllGoals } from "../../modules/GoalManager";
import { GoalCard } from "./GoalCard";

export const Achievements = () => {

    const [goals, setGoals] = useState([])

    const currentUser = sessionStorage.getItem("level_user")

    const getGoals = (currentUser) => {
        return getAllGoals(currentUser).then(g => {
            setGoals(g)
        })
    }

    useEffect(() => {
        getGoals(currentUser);
    }, [])

    return (
        <>
            <div className="achievement-list">
                <h2> Your Achievments </h2>
                <div className="achievement-list-content">
                    {goals.map(g => <GoalCard
                             key={g.id}
                             goal={g}/>                       
                    )}
                </div>
            </div>           
        </>
    )
}