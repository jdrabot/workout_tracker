const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date.now()
    },
    excerises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type is the exercise?",
            },
            name: {
                type: String,
                trim: true,
                required: "What is the name of the exercise?",
            },
            duration: {
                type: Number,
                trim: true,
                required: "How long was the workout in mins?",
            },
            distance: {
                type: Number,
                trim: true,
                allowNull: true,
            },
            weight: {
                type: Number,
                trim: true,
                allowNull: true,
            },
            sets: {
                type: Number,
                trim: true,
                allowNull: true,
            },
            reps: {
                type: Number,
                trim: true,
                allowNull: true,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout