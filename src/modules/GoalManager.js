const remoteURL = "http://localhost:8088"

//fetches completed goals associated with the currently logged in user
export const getCompletedGoals = (currentUser) => {
    return fetch(`${remoteURL}/goals?userId=${currentUser}&completed=true`).then(res => res.json())
}    

//fetches active goals associated with the currently logged in user
export const getCurrentGoals = (currentUser) => {
  return fetch(`${remoteURL}/goals?userId=${currentUser}&completed=false`).then(res => res.json())
}    

//fetches a single goal by its id
export const getGoalById = (id) => {
    return fetch(`${remoteURL}/goals/${id}?_expand=user`).then(res => res.json())
}

//allows you to delte a goal out of the json file by targeting id
export const deleteGoal = id => {
    return fetch(`${remoteURL}/goals/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

//allows you to post a new goal to the json file
export const addGoal = newGoal => {
    return fetch(`${remoteURL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGoal)
    }).then(res => res.json())
}

//allows you to edit a specific goal by targeting id
export const updateGoal  = (editedGoal) => {
    return fetch(`${remoteURL}/goals/${editedGoal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGoal)
    }).then(data => data.json());
}