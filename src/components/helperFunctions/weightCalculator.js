// fuction accepting the parameter of gender to determine which ratio should be used when calculating weights
export const ratio = (g) => {
    if (g === "male") {
        return 1.56
    }
    else if (g === "female") {
        return 1.67
    }    
}

//function accpeting the parameters of a value and gender to calculate proportional weights off a benchpress input.  Returns an array
export const ifBench = (val, gender) => {
    //sets the variable bench equal to the parameter value
    let bench = val
    //sets the variable squat equal to the prameter value multiplied by the appropriate ratio determined by gender
    let squat = val * ratio(gender)
    //sets the variable deadlift equal to the value of squat multiplied by 1.1
    let deadlift = squat * 1.1
    //returns above values in an array and rounds them to the nearest whole number
    return [`${bench}`, `${Math.round(squat)}`, `${Math.round(deadlift)}`]
}

//see above
export const ifSquat = (val, gender) => {
    let squat = val;
    let bench = val / ratio(gender);
    let deadlift = val * 1.1;
    return [`${Math.round(bench)}`, `${squat}`, `${Math.round(deadlift)}`]
}

//see above
export const ifDeadlift = (val, gender ) => {
    let deadlift = val
    let squat = val / 1.1
    let bench = squat / ratio(gender)
    return [`${Math.round(bench)}`, `${Math.round(squat)}`, `${deadlift}`]
}
