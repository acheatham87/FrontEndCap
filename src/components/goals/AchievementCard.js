import React from 'react';
import "./AchievementCard.css"

//creates the indivual card for each set achievement
export const AchievementCard = ({ achievement }) => {      
    return(
        <div className="achievement-card">
            <div className="achievement-card-content">
                <p className="achievement-card-bench"> Bench Press: {achievement.goal.userBench}lbs </p>
                <p className="achievement-card-squat"> Squat: {achievement.goal.userSquat}lbs </p>
                <p className="achievement-card-deadlift"> Deadlift: {achievement.goal.userDeadlift}lbs </p>
            </div>
        </div>
    )
}   