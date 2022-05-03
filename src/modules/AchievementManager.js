const remoteURL = "http://localhost:8088"

//fetches all achievements tied to the currently logged in user
export const getAchievementsByUserId = (currentUser) => {
    return fetch(`${remoteURL}/achievements?userId=${currentUser}&_expand=goal&_sort=completedTimestamp&_order=desc`).then(res => res.json())
}   

//allows you to add a new achievement to the JSON 
export const addAchievement = newAchievement => {
    return fetch(`${remoteURL}/achievements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAchievement)
    }).then(res => res.json())
}