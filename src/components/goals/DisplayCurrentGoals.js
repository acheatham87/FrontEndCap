import React, { useEffect, useState } from "react";
import "./DisplayCurrentGoals.css"
import { getCurrentGoals, updateGoal, deleteGoal } from "../../modules/GoalManager";
import { CurrentGoals } from "./CurrentGoals";
import { addAchievement } from "../../modules/AchievementManager";

//accepts the parameters, props? handed down from its parent, Home.js, of handleUpdateHome and currentGoals to be used to update the state of home from its child
export const DisplayCurrentGoals = ({handleUpdateHome, currentGoals}) => {

    //sets the stat of goals
    const [goals, setGoals] = useState([])

    //assigns the currently logged in usersId to the varibale currentUser
    const currentUser = sessionStorage.getItem("level_user")

    //uses the fetch call getCurrentGoals and uses returned data to set the new sate of goals
    const getGoals = (currentUser) => {
        return getCurrentGoals(currentUser).then(g => {
            setGoals(g)
        })
    }
    
    //function set to handle the onClick event of the completed button.  Accepts the paramaters of the targeted goal and the currently logged in user
    const handleCompleted = (goal, currentUser) => {

        //if goal.completed = false, set to true
        goal.completed === true ? goal.completed = false : goal.completed = true;

        //add a completedTimestamp with the curent date / time to the targeted goal
        goal.completedTimestamp = new Date()

        //uses the patch method to update the targetd goal with the above data and then sets the new state of goals.
        updateGoal(goal).then(() => getCurrentGoals(currentUser).then(setGoals).then(() => {
            //uses the post method to add a new achievement to the database
            addAchievement({
                //sets userId of the newly posted achievement to the currenlty logged in user
                userId: parseInt(currentUser),
                //sets goalId of the newly posted achievement to the currently targeted goalId
                goalId: goal.id
            })
        }).then(() => {
            //calls handleUpdateHome with the parameter of the currently logged in user to update the state of Home.js from it's child component
           handleUpdateHome(currentUser)
        }))
    }

    //function to handle the onClick event of the delete button.  Accepts the parameters of the currently logged in user and the targetd goalId
    const handleDeleteGoal = (id, currentUser) => {
        //uses the delete method to delete the currently targed goal by its Id. Then uses the fetch method to get the currently logged in users Goals and update the state of Home.js
        deleteGoal(id).then(() => getGoals(currentUser)).then(() => {
            handleUpdateHome(currentUser)})
    }    

    useEffect(() => {
        getGoals(currentUser).then();
    }, [currentGoals])

    return (
        <>
        {/* takes the goals from the feth call and maps them onto individual goal "cards". Passes several props down to CurrentGoals.js */}
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