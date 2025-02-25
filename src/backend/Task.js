const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  priority: String,
  title: String,
  description: String,
  comments: { type: Number, default: 0 },
  tasks: { type: Number, default: 0 },
  status: { type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo' },
  assignees: [String]
});

module.exports = mongoose.model('Task', taskSchema);
