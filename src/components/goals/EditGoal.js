import { useEffect, useState } from "react"
import { getGoalById, updateGoal } from "../../modules/GoalManager";
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator";
import "./EditGoal.css"

//function accepting props from parent, EditModal.js, grandparent, CurrentGoals.js, and great great grandparent, Home.js. Sets the JSX return for the content of the edit modal and functionality of updating a goal in the database after editing.
export const EditGoal = ({props}) => {

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

    //sets a useState for isLoading
    const [isLoading, setIsLoading] = useState(false);

    //sets the varibale currentUsert to the currently logged in userId from session storage
    const currentUser = sessionStorage.getItem("level_user")

    //function to handle change of the input fields in the return
    const handleFieldChange = g => {

        //sets the varibale gender to the currently logged in users gender from session storage
        const gender = JSON.parse(sessionStorage.getItem("level_user_gender"))

        //sets the value of the userBench input field equal to the variable benchInput
        let benchInput = document.getElementById("userBench")

        //sets the value of the userSquat input field equal to the variable squatInput
        let squatInput = document.getElementById("userSquat")

        //sets the value of the userDeadlift input field equal to the variable deadliftInput
        let deadliftInput = document.getElementById("userDeadlift")

        const stateToChange = {...goal};
        stateToChange[g.target.id] = g.target.value;

        //sets the state of goal equal to stateToChange
        setGoal(stateToChange)

        //switch case for the calculations used depending on which input field you choose to type in
        switch (g.target.id) {
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

    //function to handle onClick event of the Set New Goals button
    const updateExistingGoal = g => {

        //prevents the submit button from attempting to refresh the page
        g.preventDefault();

        //sets the new state of isLoading to true
        setIsLoading(true);

        //creates the variable edited goal and sets the values to be patched to the database
        const editedGoal = {
            id: goal.id,
            userId: goal.userId,
            userBench: parseInt(bench),
            userSquat: parseInt(squat),
            userDeadlift: parseInt(deadlift),
            completed: goal.completed           
        }

        //when you click the set goal button we do a patch method adding the edited goal to the database.  Closes the modal and updates the state of Home.js
        updateGoal(editedGoal).then((b) => {
            props.onClose()}).then(() => {
            props.handleUpdateHome(currentUser)
        })
    }

    useEffect(() => {
        getGoalById(props.currentGoalId)
        .then(goal => {
            setGoal(goal);
            setIsLoading(false)
        })
    }, [])

    // JSX return to be displayed on the Edit Modal
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