const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const Task = require('./models/Task');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create task
app.post('/api/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

app.listen(5000, () => console.log('Server running on port 5000'));
