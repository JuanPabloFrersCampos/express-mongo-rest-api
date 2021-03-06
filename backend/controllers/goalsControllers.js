import asyncHandler from 'express-async-handler'
import goalsSchema from '../models/goalsModel.js'


//@desc Get all goals
//@route GET /api/goals
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await goalsSchema.find()
    
    res.status(200).json({goals})
})

//@desc post a goal
//@route POST /api/goals
export const postGoal = asyncHandler(async(req, res) => {
    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await goalsSchema.create({
        text: req.body.text
    })

    res.status(200).json({goal})
})

//@desc Put (over-write) goal
//@route PUT /api/goals/:id
export const putGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Put request"})
})

//@desc Delete goal
//@route DELET /api/goals/:id
export const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Delete request"})
})