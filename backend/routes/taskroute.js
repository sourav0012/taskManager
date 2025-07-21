const express = require('express');

const {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
} = require('../controller/taskcontroller');

const route= express.Router();

route.get('/',(req,res)=>{
    res.send("Task route is working");
})

// Route to create a task
route.post('/create', createTask);
// Route to get all tasks
route.get('/all', getAllTasks);
// Route to update a task
route.put('/update', updateTask);
// Route to delete a task
route.delete('/delete', deleteTask);


// Exporting the route
module.exports = route;