const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//duration, weight, reps, sets, and distance//
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        duration: {
            type: Number,
            required: "Enter excercise duration"
        },
        weight: {
            type: Number
        },
        repetition: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }

    }]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;