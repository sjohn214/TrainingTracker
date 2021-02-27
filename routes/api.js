const router = require("express").Router();
// const { db } = require("../models/workout");
const Workout = require("../models/workout");



//post route to create workouts
router.post("/api/workouts", function (req, res) {
    // create takes an argument of an object describing the item
    // inserted into table. Passing in an object with a text and complete property (req.body)
    Workout.create({

    }).then(function (dbWorkout) {
        // Access to the new workout as an argument inside of the callback function
        res.json(dbWorkout);
    }).catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // "Catch" the error to prevent it from being "thrown", which could crash node app
        res.json(err);
    });
});



//put route for updating workouts. Get the updated workout data from req.body
router.put("/api/workouts/:id", function (req, res) {
    // Update takes in an object describing the properties to update, and
    // use where to describe which objects to update
    Workout.findByIdAndUpdate(
        req.params.id, {
            $push: {
                exercises: req.body
            }

        }).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // "Catch" the error to prevent it from being "thrown", which could crash node app
        res.json(err);
    });
});


//get route for getting all workouts.
// findAll returns all entries for a particular table when no option is provided
// Access to the workouts as an argument inside of the callback function
router.get("/api/workouts", function (req, res) {
    Workout.find({}).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});


//get route for getting all workouts ranges.
// findAll returns all entries for a particular table when no option is provided
// Access to the workouts as an argument inside of the callback function
router.get("/api/workouts/range", function (req, res) {
    Workout.find({}).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

//delete route that can get the id of the Workout to be deleted from
// req.params.id
//specifies where to destroy Workout
router.delete("/api/workouts", function (req, res) {
    Workout.findByIdAndDelete(req.body.id)
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        });
});

module.exports = router;