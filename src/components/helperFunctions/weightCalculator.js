export const ratio = (g) => {
    if (g === "male") {
        return 1.56
    }
    else if (g === "female") {
        return 1.67
    }    
}

export const ifBench = (val, gender) => {
    let bench = val
    let squat = val * ratio(gender)
    let deadlift = squat * 1.1
    return [`${bench}`, `${Math.round(squat)}`, `${Math.round(deadlift)}`]
}

export const ifSquat = (val, gender) => {
    let squat = val;
    let bench = val / ratio(gender);
    let deadlift = val * 1.1;
    return [`${Math.round(bench)}`, `${squat}`, `${Math.round(deadlift)}`]
}

export const ifDeadlift = (val, gender ) => {
    let deadlift = val
    let squat = val / 1.1
    let bench = squat / ratio(gender)
    return [`${Math.round(bench)}`, `${Math.round(squat)}`, `${deadlift}`]
}
