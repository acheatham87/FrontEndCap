import { useEffect, useState } from "react"
import { getGoalById, updateGoal } from "../../modules/GoalManager";
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator";
import "./EditGoal.css"


export const EditGoal = ({goalId}) => {
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
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = g => {

        const gender = JSON.parse(sessionStorage.getItem("level_user_gender"))
        let benchInput = document.getElementById("userBench")
        let squatInput = document.getElementById("userSquat")
        let deadliftInput = document.getElementById("userDeadlift")

        const stateToChange = {...goal};
        stateToChange[g.target.id] = g.target.value;
        setGoal(stateToChange)

        switch (g.target.id) {
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

    const updateExistingGoal = g => {
        g.preventDefault();
        setIsLoading(true);

        const editedGoal = {
            id: goalId,
            userId: goal.userId,
            userBench: parseInt(bench),
            userSquat: parseInt(squat),
            userDeadlift: parseInt(deadlift),
            completed: goal.completed           
        }

        updateGoal(editedGoal)
    }

    useEffect(() => {
        getGoalById(goalId)
        .then(goal => {
            setGoal(goal);
            setIsLoading(false)
        })
    }, [])

    return(
        <form className="edit-goal-form">
        <h2 className="edit-goal-header">Edit Your Goal</h2>
        <fieldset>
            <div className="edit-form-group">
                <label htmlFor="bench">Bench</label>
                <input onChange={handleFieldChange} type="text" id="userBench" required autoFocus className="editGoal-input-field" placeholder={`${goal.userBench}`} value={bench} />
            </div>
        </fieldset>
        <fieldset>
            <div className="edit-form-group">
                <label htmlFor="squat">Squat</label>
                <input type="text" onChange={handleFieldChange} id="userSquat" required autoFocus className="editGoal-input-field" placeholder={`${goal.userSquat}`} value={squat} />
            </div>
        </fieldset>
        <fieldset>
            <div className="edit-form-group">
                <label htmlFor="deadlift">Deadlift</label>
                <input type="text" onChange={handleFieldChange} id="userDeadlift" required autoFocus className="editGoal-input-field" placeholder={`${goal.userDeadlift}`} value={deadlift} />
            </div>
        </fieldset>
        <button type="button" className="edit-goal-submit" disabled={isLoading} onClick={updateExistingGoal}>Set New Goals</button>
    </form>
)
}