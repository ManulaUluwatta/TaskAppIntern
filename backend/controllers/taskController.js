 const asyncHandler = require('express-async-handler')

 // @desc Get task
 // @route GET /api/tasks
 // @access Private
 const getTasks = asyncHandler(async ( req, res) => {
     res.status(200).json({message: `Get Tasks`})
 })
  
 // @desc Set task
 // @route POST /api/tasks
 // @access Private
 const setTasks = asyncHandler(async ( req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text')
    }
    res.status(200).json({message: `Set Tasks`})
})
 
 // @desc Update task
 // @route Put /api/tasks/:id
 // @access Private
 const updateTask = asyncHandler(async ( req, res) => {
    res.status(200).json({message: `Update task ${req.params.id}`})
 })
 
 // @desc Delete task
 // @route DELETE /api/tasks/:id
 // @access Private
 const deleteTask = asyncHandler(async ( req, res) => {
    res.status(200).json({message: `Delete  Tasks ${req.params.id}`})
})

 module.exports = {
    getTasks,
    setTasks,
    updateTask,
    deleteTask
 }