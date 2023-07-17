const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router();

// require Auth for all routes
router.use(requireAuth)

// GET all routes
router.get('/', getWorkouts)

// GET a single route
router.get('/:id', getWorkout)

// POST a single route
router.post('/', createWorkout)

// DELETE a single route
router.delete('/:id', deleteWorkout)

// UPDATE a single route
router.patch('/:id', updateWorkout)

module.exports = router