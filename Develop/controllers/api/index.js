//This will export workoutRoutes and api.

const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

router.use('/workouts', workoutRoutes);

module.exports = router;