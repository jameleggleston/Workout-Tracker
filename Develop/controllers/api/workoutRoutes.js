const router = require('express').Router();
const db = require('../../models');


router.get('/', async (req, res) => {
    try {
        const workouts = await db.Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "$exercises.duration" } }
            }
        ]);
        res.status(200).json(workouts);
    } catch (err) {
        err && res.status(500).json(err);
    }

});

