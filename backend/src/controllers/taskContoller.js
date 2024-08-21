const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    const task = new Task({
      title,
      description,
      dueDate,
      user: req.user.id,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ dueDate: 1 });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get tasks' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    task.status = req.body.status || task.status;
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.dueDate = req.body.dueDate || task.dueDate;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete task' });
  }
};
