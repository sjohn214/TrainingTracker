const router = require("express").Router();
const { db } = require("../models/workout");
const Workout = require("../models/workout");

//post route to create workouts
app.post("/api/workout", function (req, res){
    // create takes an argument of an object describing the item
    // inserted into table. Passing in an object with a text and complete property (req.body)
    Workout.create({
        text: req.body.text,
        complete: req.body.complete
    }).then(function(dbWorkout){
    // Access to the new workout as an argument inside of the callback function
        res.json(dbWorkout);
    }).catch(function(err){
    // Whenever a validation or flag fails, an error is thrown
    // "Catch" the error to prevent it from being "thrown", which could crash node app
        res.json(err);
    });
});



//put route for updating workouts. Get the updated workout data from req.body
app.put("/api/workout", function (req, res){
    // Update takes in an object describing the properties to update, and
    // use where to describe which objects to update
    Workout.findOneAndUpdate({
        text: req.body.text,
        complete: req.body.complete
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbWorkout){
        res.json(dbWorkout);
    }).catch(function(err){
    // Whenever a validation or flag fails, an error is thrown
    // "Catch" the error to prevent it from being "thrown", which could crash node app
        res.json(err);
    });
});


//get route for getting all workouts.
// findAll returns all entries for a particular table when no option is provided
// Access to the workouts as an argument inside of the callback function
app.get("/api/workout", function (req, res){
    Workout.findAll({}).then(function(dbWorkout){
        res.json(dbWorkout);
    });
});

//delete route that can get the id of the Workout to be deleted from
  // req.params.id
//specifies where to destroy Workout
app.delete("/api/workout/:id", function(req, res) {
    Workout.destroy({
        where: { 
            id: req.params.id 
        }
    }).then(function(dbWorkout) {
        res.json(dbWorkout);
    });
});

module.exports = router;