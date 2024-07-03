let tasks = [];
let currentId = 1;

class Task {
  constructor(title, description) {
    this.id = currentId++;
    this.title = title;
    this.description = description;
  }
}

const getTasks = () => tasks;
const getTaskById = (id) => tasks.find(task => task.id === id);
const createTask = (title, description) => {
  const newTask = new Task(title, description);
  tasks.push(newTask);
  return newTask;
};
const updateTask = (id, title, description) => {
  const task = getTaskById(id);
  if (task) {
    task.title = title;
    task.description = description;
  }
  return task;
};
const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
