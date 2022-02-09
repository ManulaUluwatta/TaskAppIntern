const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

// @desc Get task
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  //  res.status(200).json({message: `Get Tasks`})

  res.status(200).json(tasks);
});

// @desc Set task
// @route POST /api/tasks
// @access Private
const setTasks = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }

  const task = await Task.create({
    text: req.body.text,
  });
  // res.status(200).json({message: `Set Tasks`})
  res.status(200).json(task);
});

// @desc Update task
// @route Put /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const taskID = await Task.findById(req.params.id);
  if (!taskID) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  //   res.status(200).json({ message: `Update task ${req.params.id}` });
  res.status(200).json(updatedTask);
});

// @desc Delete task
// @route DELETE /api/tasks/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  await task.remove();
  //   res.status(200).json({ message: `Delete  Tasks ${req.params.id}` });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  setTasks,
  updateTask,
  deleteTask,
};
