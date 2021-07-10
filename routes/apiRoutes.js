const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ]).then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(5).then(dbWorkouts => {
        res.json(dbWorkouts)
    })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then((workoutData) => {
        res.json(workoutData);
    }).catch((err) => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((workoutData) => {
            res.json(workoutData);
        }).catch((err) => {
            res.json(err);
        });
});

module.exports = router;