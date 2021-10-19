const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({    
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of your exercise.", 
            },
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of exercise.", 
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
                required: "Please enter the duration of your exercise."
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;