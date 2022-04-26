import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator"

export const CreateGoal = () => {

    const [newGoal, setNewGoal] = useState({
        userId: 0,
        userBench: 0,
        userSquat: 0,
        userDeadlift: 0,
        timestamp: "",
        completed: false
    })

    const navigate = useNavigate()

    const handleInputChange = (event) => {

        const gender = JSON.parse(sessionStorage.getItem("level_user_gender"))
        let benchInput = document.getElementById("bench")
        let squatInput = document.getElementById("squat")
        let deadliftInput = document.getElementById("deadlift")

        switch (event.target.id) {
            case "bench":
                let b = ifBench(benchInput.value, gender)
                squatInput.value = b[1]
                deadliftInput.value = b[2]
                
                break;
            case "squat":
                let s = ifSquat(squatInput.value, gender)
                benchInput.value = s[0]
                deadliftInput.value = s[2]

                break;
            case "deadlift":
                let d = ifDeadlift(deadliftInput.value, gender)
                benchInput.value = d[0]
                squatInput.value = d[1]

                break;
        
            default:
                break;
        }
    }

     return (
        <form className="new-goal-form">
            <h2 className="new-goal-header">Create a New Goal</h2>
            <p className="new-goal-instructions">Input your goal weight for the lift of your choice.  LEVEL will generate a proportional goal for your other lifts</p>
            <h4 className="new-goal-lists">Enter weight for selected lift</h4>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bench">Bench</label>
                    <input onChange={handleInputChange} type="text" id="bench" required autoFocus className="newGoal-input-field" placeholder="--"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="squat">Squat</label>
                    <input type="text" onChange={handleInputChange} id="squat" required autoFocus className="newGoal-input-field" placeholder="--"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="deadlift">Deadlift</label>
                    <input type="text" onChange={handleInputChange} id="deadlift" required autoFocus className="newGoal-input-field" placeholder="--"/>
                </div>
            </fieldset>
            <button type="button" className="new-goal-submit">Set</button>
        </form>
    )
}