const remoteURL = "http://localhost:8088"

//fetches all lifts in the JSON
export const getAllLifts = () => {
    return fetch(`${remoteURL}/lifts`).then(res => res.json())
}

//fetches a single lift from JSON by its ID
export const getLiftById = (id) => {
    return fetch(`${remoteURL}/lifts/${id}`).then(res => res.json())
}