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

    const handleSelect = () => {
        if (document.getElementById("lift-selection").value == 1) {
            document.getElementById("bench").disabled = false
            document.getElementById("squat").disabled = true
            document.getElementById("deadlift").disabled = true
        };
        if (document.getElementById("lift-selection").value == 2) {
            document.getElementById("bench").disabled = true
            document.getElementById("squat").disabled = false
            document.getElementById("deadlift").disabled = true
        };
        if (document.getElementById("lift-selection").value == 3) {
            document.getElementById("bench").disabled = true
            document.getElementById("squat").disabled = true
            document.getElementById("deadlift").disabled = false
        };
        if (document.getElementById("lift-selection").value == 0) {
            document.getElementById("bench").disabled = true
            document.getElementById("squat").disabled = true
            document.getElementById("deadlift").disabled = true
        };
    }


    return (
        <form className="new-goal-form">
            <h2 className="new-goal-header">Create a New Goal</h2>
            <p className="new-goal-instructions">Select a lift from the drop down menu below.  After selecting a lift, input your goal weight for said lift.  LEVEL will generate a proportional goal for your other lifts</p>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="lifts">Select a lift</label>
                    <select name="lift-selection" id="lift-selection" className="newGoal-form-control" onChange={handleSelect}>
                        <option value="0">--</option>
                        <option value="1">Bench</option>
                        <option value="2">Squat</option>
                        <option value="3">Deadlift</option>
                    </select>
                </div>
            </fieldset>
            <h4 className="new-goal-lists">Enter weight for selected lift</h4>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bench">Bench</label>
                    <input type="text" id="bench" required autoFocus className="newGoal-input-field" placeholder="--" disabled/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="squat">Squat</label>
                    <input type="text" id="squat" required autoFocus className="newGoal-input-field" placeholder="--" disabled/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="deadlift">Deadlift</label>
                    <input type="text" id="deadlift" required autoFocus className="newGoal-input-field" placeholder="--" disabled/>
                </div>
            </fieldset>
            <button type="button" className="new-goal-submit">Create</button>
        </form>
    )
}