import express from 'express';

import {getGoals, postGoal, putGoal, deleteGoal} from
    '../controllers/goalsControllers.js';

const router = express.Router();

//All routes in this file, start with /api/goals/

//Get all goals
router.get('/', getGoals);

//Create a goal
router.post('/', postGoal);

//Modify a goal (over write)
router.put('/:id', putGoal);

//Delete a goal
router.delete('/:id', deleteGoal);

export default router;