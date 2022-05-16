# LEVEL

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.


## What is LEVEL?

LEVEL is an app intended to help people build balanced strength through weight training.  Wether you're new to the game or a seasoned veteran, LEVEL can be a useful tool for you.  We use your gender and predetermined weight ratios taken from powerliftingtechnique.com (they found these by polling people and then avergaing the diffence between their lifts to give us applicable ratios) to calculate what you should be able to lift on each individual exercise so you're not over or under developed in one area.

We only have 3 lifts implemented in our app at the moment.  Bench, Squat, and Deadlift.  The average male can squat 156% of their benchpress and can deadlift 110% of their squat.  The average female can squat 167% of their benchpress and can deadlift 110% of thier squat.  Knowing this we ask you to enter either a known, or goal, weight for one of the 3 currently implemented lifts.  We take that given weight, your gender, and the above ratios and output proportional targets for all lifts.

Once a goal has been set you can delete or edit it said goal.

Once a goal has been reached you can mark it as completed and it will be moved to your achievements so you can track your progress / history then set a new goal.

If you're new to weight lifting or just need a refresher, we also have a helpful instructional page showing how to properly do each currently implemented lift. It has a detailed text desctription of each lift and also a short but descriptive video breaking down the proper set up and motions involved.

## Getting Started

Copy and paste these resources in your API to have some starting data for your application.

```json
{
    "users": [
        {
        "id": 1,
        "name": "Andrew Cheatham",
        "email": "andrew@cheatham.com",
        "gender": "male"
        }
    ],
    "goals": [
        {
            "userId": 1,
            "userBench": 185,
            "userSquat": 285,
            "userDeadlift": 315,
            "completed": true,
            "id": 1,
            "completedTimestamp": "2022-05-04T02:07:46.590Z"
        }
    ],
        "achievements": [
        {
            "userId": 3,
            "goalId": 7,
            "id": 5
        }
    ],
    "lifts": [
        {
        "id": 1,
        "name": "Bench",
        "description": "The bench press is a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level and then press upwards while extending your arms.",
        "embed": "https://www.youtube.com/embed/SCVCLChPQFY"
        },
        {
        "id": 2,
        "name": "Squat",
        "description": "A barbell squat, also known as a barbell back squat, is a compound exercise that activates muscle groups throughout your lower body, including your hamstrings, glutes, and lower back muscles.",
        "embed": "https://www.youtube.com/embed/QmZAiBqPvZw"
        },
        {
        "id": 3,
        "name": "Deadlift",
        "description": "The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. Your back is flat throughout the movement. Some benefits of performing deadlifts include strengthening and gaining more definition in your upper and lower back, glutes, and hamstrings.",
        "embed": "https://www.youtube.com/embed/1ZXobu7JvvE"
        }
    ]
}
```


## Wireframe 
was hand drawn (very poorly) and has not been attached.


## ERD:
![alt text](https://github.com/acheatham87/Level-FrontEndCap/blob/main/public/images/ERD.png?raw=true)

