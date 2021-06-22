const express = require('express');

const taskController = require('../controllers/todo');

const router = express.Router();

router.post('/add-task', taskController.addTask);
router.get('/:id',taskController.deleteTask);
router.post('/:id', taskController.updateTask);
router.get('/', taskController.getTasks);

module.exports = router;