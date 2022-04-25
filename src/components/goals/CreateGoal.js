import React, {useState, useEffect} from "react"
import { ifBench, ifSquat, ifDeadlift } from "../helperFunctions/weightCalculator"

export const CreateGoal = () => {

    const [goal, setGoal] = useState({
        userId: 0,
        userBench: 0,
        userSquat: 0,
        userDeadlift: 0,
        timestamp: 0
    })

    const handleControlledInputChange = (event) => {
        let newGoal = {...goal}
        let newVal = event.target.value

        newGoal[event.target.id] = newVal
        setGoal(newGoal)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        goal.timestamp= new Date();
        goal.userId = sessionStorage.getItem("level_user")

        if (goal.userBench === "" && goal.userSquat === "" && goal.userDeadlift === "") {
            window.alert("Please add a weight to one of you lifts")
        } 
        if (goal.userBench === val && goal.userSquat === "" && goal.userDeadlift === "") {
            
        } 
    }
}