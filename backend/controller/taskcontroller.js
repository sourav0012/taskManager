const Task = require("../models/taskmodel");

//create a task

const createTask = async (req,res)=>{
    try {
        const { title, description } = req.body;
        const newTask = new Task({
            title,
            description
        });
        await newTask.save();
        res.status(201).json({
            msg: "Task created successfully",
            task: newTask
        })

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            msg: "Error in creating task",
            error: err.message
        })
    }
}

//get all tasks

const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json({
            msg: "Tasks fetched successfully",
            tasks
        })

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            msg: "Error in fetching tasks",
            error: err.message
        })
    }
}

//update a task

const updateTask = async (req,res)=>{
    try {
        const { id, title, description, completed } = req.body;
        const task = await Task.findByIdAndUpdate(id, {
            title,
            description,
            completed
        }, { new: true });
        
        if (!task) {
            return res.status(404).json({
                msg: "Task not found"
            });
        }
        
        res.status(200).json({
            msg: "Task updated successfully",
            task
        })

        

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            msg: "Error in updating task",
            error: err.message
        })
    }
}

//delete a task
const deleteTask = async (req,res)=>{
    try {
        const { id } = req.body;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({
                msg: "Task not found"
            });
        }
        res.status(200).json({
            msg: "Task deleted successfully",
            task
        })

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            msg: "Error in deleting task",
            error: err.message
        })
    }
}


module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
}