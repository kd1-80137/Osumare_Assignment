const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../models/taskModel');

const getAllTasks = (req, res) => {
  res.status(200).json(getTasks());
};

const getTask = (req, res) => {
  const task = getTaskById(parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
};

const addTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  const newTask = createTask(title, description);
  res.status(201).json(newTask);
};

const editTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  const task = updateTask(parseInt(req.params.id), title, description);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
};

const removeTask = (req, res) => {
  const task = getTaskById(parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  deleteTask(parseInt(req.params.id));
  res.status(204).send();
};

module.exports = { getAllTasks, getTask, addTask, editTask, removeTask };
