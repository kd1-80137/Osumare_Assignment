const express = require('express');
const { getAllTasks, getTask, addTask, editTask, removeTask } = require('../controllers/taskController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/tasks', authenticateToken, getAllTasks);
router.get('/tasks/:id', authenticateToken, getTask);
router.post('/tasks', authenticateToken, addTask);
router.put('/tasks/:id', authenticateToken, editTask);
router.delete('/tasks/:id', authenticateToken, removeTask);

module.exports = router;
