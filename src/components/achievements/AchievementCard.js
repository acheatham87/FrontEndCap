import React from 'react';
import "./AchievementCard.css"

//creates the return for each individual achievement being mapped in Achievements.js
export const AchievementCard = ({ achievement }) => {      
    return(
        <div className="achievement-card">
            <div className="achievement-card-content">
                <p className="achievement-card-bench"> Bench Press: {achievement.goal.userBench}lbs </p>
                <p className="achievement-card-squat"> Squat: {achievement.goal.userSquat}lbs </p>
                <p className="achievement-card-deadlift"> Deadlift: {achievement.goal.userDeadlift}lbs </p>
                <p className='achievement-card-break'>_________________________</p>
            </div>
        </div>
    )
}   