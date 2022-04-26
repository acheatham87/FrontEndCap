const remoteURL = "http://localhost:8088"

export const getAllLifts = () => {
    return fetch(`${remoteURL}/lifts`).then(res => res.json())
}

export const getLiftById = (id) => {
    return fetch(`${remoteURL}/lifts/${id}`).then(res => res.json())
}