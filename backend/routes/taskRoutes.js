const express = require('express')
const router = express.Router()
const {  getTasks,setTasks,updateTask,deleteTask } = require('../controllers/taskController')


router.route('/').get(getTasks).post(setTasks)
// router.get('/', getTasks)
// router.post('/', setTasks)

router.route('/:id').put(updateTask).delete(deleteTask)
// router.put('/:id', updateTask)
// router.delete('/:id', deleteTask)

module.exports = router 