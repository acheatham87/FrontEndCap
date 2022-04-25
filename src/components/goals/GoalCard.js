import React from 'react';
import "./GoalCard.css"; 

//creates the indivual card for each set goal
export const GoalCard = ({ goal }) => {    
    
    return(
        <div className="goal-card">
            <h3>Previous Goal</h3>
            <div className="goal-card-content">
                <p className="goal-card-bench"> Bench Press: {goal.userBench}lbs </p>
                <p className="goal-card-squat"> Squat: {goal.userSquat}lbs </p>
                <p className="goal-card-deadlift"> Deadlift: {goal.userDeadlift}lbs </p>
            </div>
        </div>
    )
}