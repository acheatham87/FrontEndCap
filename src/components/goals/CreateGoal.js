import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { addGoal } from "../../modules/GoalManager"
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator"
import "./CreateGoal.css"

export const CreateGoal = () => {

    //sets a useState for goal
    const [goal, setGoal] = useState({
        userId: "",
        userBench: "",
        userSquat: "",
        userDeadlift: "",
        completed: false
    })

    //sets a useState for bench
    const [bench, setBench] = useState('')

    //sets a useState for squat
    const [squat, setSquat] = useState('')

    //sets a useState for deadlift
    const [deadlift, setDeadlift] = useState('')

    //sets the function useNavigate to the variable navigate
    const navigate = useNavigate()

    //function to handle change of the input fields in the return
    const handleInputChange = (event) => {

        //sets the varibale gender to the currently logged in users gender from session storage
        const gender = JSON.parse(sessionStorage.getItem("level_user_gender"))

        //sets the value of the userBench input field equal to the variable benchInput
        let benchInput = document.getElementById("userBench")

        //sets the value of the userSquat input field equal to the variable squatInput
        let squatInput = document.getElementById("userSquat")

        //sets the value of the userDeadlift input field equal to the variable deadliftInput
        let deadliftInput = document.getElementById("userDeadlift")

        
        const newGoal = {...goal}
        let selectedVal = parseInt(event.target.value)

        newGoal[event.target.id] = selectedVal

        //sets the state of goal equal to newGoal
        setGoal(newGoal)

        //switch case for the calculations used depending on which input field you choose to type in
        switch (event.target.id) {
            //if the event.targe.id (input field selected) is userBench
            case "userBench":
                //sets the value of variable b equal to the function ifBench accepting the bench input fields input, as value and gender as variables.  Returns an array.
                let b = ifBench(benchInput.value, gender)
                //sets the new state of bench
                setBench(b[0])
                //sets the new state of squat and rounds it to the nearest interval of 5
                setSquat(Math.round(b[1]/5)*5)
                //sets the new state of deadlift and rounds it to the nearest interval of 5
                setDeadlift(Math.round(b[2]/5)*5)
                
                break;
                //see above
            case "userSquat":
                let s = ifSquat(squatInput.value, gender)
                setBench(Math.round(s[0]/5)*5)
                setSquat(s[1])
                setDeadlift(Math.round(s[2]/5)*5)

                break;
                //see above
            case "userDeadlift":
                let d = ifDeadlift(deadliftInput.value, gender)
                setBench(Math.round(d[0]/5)*5)
                setSquat(Math.round(d[1]/5)*5)
                setDeadlift(d[2])

                break;
        
            default:
                break;
        }
    }

    //function to handle onClick event of the set goal button
    const handleSetGoal = (event) => {

        //prevents the submit button from attempting to refresh the page
        event.preventDefault()

        //sets goal.userId to the currently logged in usersId from session storage
        goal.userId = parseInt(sessionStorage.getItem("level_user"))
        //sets goal.userBench equal to the current state of bench
        goal.userBench = parseInt(bench)
        //sets goal.userSquat equal ot the current state of squat
        goal.userSquat = parseInt(squat)
        //sets goal.userDeadlift equal to the current state of deadlift
        goal.userDeadlift = parseInt(deadlift)

        //if bench, squat, or deadlift have an empty value when you try to hit the set goal button display an alert message 
        if ( bench === "" || squat === "" || deadlift === "") {
            window.alert("Please enter a weight below.")
        } 
        //if bench, squat, and deadlift all have a value when you click the set goal button we do a post method adding a new goal to the database and then route you back to the home page
        else {
            addGoal(goal).then(() => {
                navigate('/Home')
            })
        }
    }
    // return to be displayed on the DOM of New Goal
     return (
        <form className="new-goal-form">
            <div className="new-goal-container">
                <h2 className="new-goal-header">Create a New Goal</h2>
                <h4 className="new-goal-instructions">Input your goal weight (in lbs) for the lift of your choice.  LEVEL will generate a proportional goal for your other lifts.</h4>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="bench">Bench</label>
                        <input onChange={handleInputChange} type="text" id="userBench" required autoFocus className="newGoal-input-field" placeholder="--" value={bench} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="squat">Squat</label>
                        <input type="text" onChange={handleInputChange} id="userSquat" required autoFocus className="newGoal-input-field" placeholder="--" value={squat} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="deadlift">Deadlift</label>
                        <input type="text" onChange={handleInputChange} id="userDeadlift" required autoFocus className="newGoal-input-field" placeholder="--" value={deadlift} />
                    </div>
                </fieldset>
                <div className="new-goal-button-container">
                <button type="button" className="new-goal-submit" onClick={handleSetGoal}>Set Goal</button>
                </div>
            </div>
        </form>
    )
}