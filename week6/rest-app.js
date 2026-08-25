const express = require('express');
const app = express();
const PORT = 3000;

/**
 * MIDDLEWARE
 * This allows Express to read JSON data
 * sent in the body of POST or PUT requests.
 */
app.use(express.json());

// Mock Database
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

/**
 * 1. GET - Read all tasks
 * URL: http://localhost:3000/tasks
 */
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

/**
 * 2. POST - Create a new task
 * URL: http://localhost:3000/tasks
 */
app.post('/tasks', (req, res) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

/**
 * 3. PUT - Update an existing task
 * Dynamic URL
 * URL Example: http://localhost:3000/tasks/1
 */
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

/**
 * 4. DELETE - Remove a task
 * Dynamic URL
 * URL Example: http://localhost:3000/tasks/2
 */
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});
