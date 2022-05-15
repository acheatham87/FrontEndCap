import React, { useState } from 'react';
import { EditModal } from '../modal/EditModal';
import "./CurrentGoals.css"; 

//function accepting several props handed down by parent, DisplayCurrentGoals.js, or grandparent, Home.js, to return the individual goal "cards" mapped out by DisplayCurrentGoals.js
export const CurrentGoals = ({ goal, handleCompleted, handleUpdateHome, handleDeleteGoal }) => { 

    //sets variable currentUser equal to the currently logged in userId retrieved from sessionStorage
    const currentUser = sessionStorage.getItem("level_user") 

    //sets the state of show used for Modal
    const [show, setShow] = useState(false)

    //JSX return to display each goal on the DOM        
    return(
        <div className="current-goal-card">
            <div className="current-goal-card-content">
                <p className="current-goal-card-bench"> Bench Press: {goal.userBench}lbs </p>
                <p className="current-goal-card-squat"> Squat: {goal.userSquat}lbs </p>
                <p className="current-goal-card-deadlift"> Deadlift: {goal.userDeadlift}lbs </p>
            </div>
            <button type='button' className='current-goal-card-edit' onClick={() => setShow(true)}>Edit</button>
            <button type='button' className='current-goal-card-delete' onClick={() => {handleDeleteGoal(goal.id, currentUser)}} >Delete</button>
            <button type="button" className='current-goal-card-completed' onClick={() => {                
                handleCompleted(goal, currentUser)}} >Completed</button>
                <EditModal currentGoalId={goal.id} 
                onClose={() => setShow(false)} show={show}
                handleUpdateHome={handleUpdateHome} />
        </div>
    )
}