import React, { useState } from 'react';
import { EditModal } from '../modal/EditModal';
import "./CurrentGoals.css"; 

//creates the indivual card for each set goal
export const CurrentGoals = ({ goal, handleCompleted, handleUpdateHome }) => { 
    const currentUser = sessionStorage.getItem("level_user") 
    const [show, setShow] = useState(false)
        
    return(
        <div className="current-goal-card">
            <h3 className='current-goal-card-header'>Active Goals</h3>
            <div className="current-goal-card-content">
                <p className="current-goal-card-bench"> Bench Press: {goal.userBench}lbs </p>
                <p className="current-goal-card-squat"> Squat: {goal.userSquat}lbs </p>
                <p className="current-goal-card-deadlift"> Deadlift: {goal.userDeadlift}lbs </p>
            </div>
            <button type='button' className='current-goal-card-edit' onClick={() => setShow(true)}>Edit</button>
            <button type="button" className='current-goal-card-completed' onClick={() => {                
                handleCompleted(goal, currentUser)}} >Completed</button>
                <EditModal currentGoalId={goal.id} 
                onClose={() => setShow(false)} show={show}
                handleUpdateHome={handleUpdateHome} />
        </div>
    )
}