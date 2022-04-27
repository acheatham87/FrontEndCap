import React from 'react';
import "./GoalCard.css"; 

//creates the indivual card for each set goal
export const GoalCard = ({ goal }) => {    
    
    return(
        <div className="completed-goal-card">
            <h3 className='completed-goal-card-header'>Previous Goals</h3>
            <div className="completed-goal-card-content">
                <p className="completed-goal-card-bench"> Bench Press: {goal.userBench}lbs </p>
                <p className="completed-goal-card-squat"> Squat: {goal.userSquat}lbs </p>
                <p className="completed-goal-card-deadlift"> Deadlift: {goal.userDeadlift}lbs </p>
            </div>
            <button type='button' className='completed-goal-card-edit'>Edit</button>
            <button type="button" className='completed-goal-card-delete'>Delete</button>
        </div>
    )
}