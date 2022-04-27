import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { addGoal } from "../../modules/GoalManager"
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator"

export const CreateGoal = () => {

    const [goal, setGoal] = useState({
        userId: "",
        userBench: "",
        userSquat: "",
        userDeadlift: "",
        completed: false
    })

    const [bench, setBench] = useState('')
    const [squat, setSquat] = useState('')
    const [deadlift, setDeadlift] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (event) => {

        const gender = JSON.parse(sessionStorage.getItem("level_user_gender"))
        let benchInput = document.getElementById("userBench")
        let squatInput = document.getElementById("userSquat")
        let deadliftInput = document.getElementById("userDeadlift")

        const newGoal = {...goal}
        let selectedVal = parseInt(event.target.value)

        newGoal[event.target.id] = selectedVal
        setGoal(newGoal)

        switch (event.target.id) {
            case "userBench":
                let b = ifBench(benchInput.value, gender)
                squatInput.value = b[1]
                deadliftInput.value = b[2]
                setBench(b[0])
                setSquat(b[1])
                setDeadlift(b[2])
                
                break;
            case "userSquat":
                let s = ifSquat(squatInput.value, gender)
                benchInput.value = s[0]
                deadliftInput.value = s[2]
                setBench(s[0])
                setSquat(s[1])
                setDeadlift(s[2])

                break;
            case "userDeadlift":
                let d = ifDeadlift(deadliftInput.value, gender)
                benchInput.value = d[0]
                squatInput.value = d[1]
                setBench(d[0])
                setSquat(d[1])
                setDeadlift(d[2])

                break;
        
            default:
                break;
        }
    }
    console.log(bench, squat, deadlift)

    const handleSetGoal = (event) => {
        event.preventDefault()

        goal.userId = parseInt(sessionStorage.getItem("level_user"))
        goal.userBench = parseInt(bench)
        goal.userSquat = parseInt(squat)
        goal.userDeadlift = parseInt(deadlift)

        if ( bench === "" || squat === "" || deadlift === "") {
            window.alert("Please enter a weight below.")
        } else {
            addGoal(goal).then(() => {
                navigate('/Home')
            })
        }
    }

     return (
        <form className="new-goal-form">
            <h2 className="new-goal-header">Create a New Goal</h2>
            <p className="new-goal-instructions">Input your goal weight (in lbs) for the lift of your choice.  LEVEL will generate a proportional goal for your other lifts.</p>
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
            <button type="button" className="new-goal-submit" onClick={handleSetGoal}>Set Goal</button>
        </form>
    )
}