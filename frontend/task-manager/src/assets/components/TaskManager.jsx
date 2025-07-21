import React from 'react'
import { useState,useEffect } from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios'
const TaskManager = () => {
    const [task, setTask] = useState([]);
    const [edittask, setEdittask] = useState(null)
    const fetchtask = async () =>{
        let res = await axios.get('http://localhost:5000/task/all');
        console.log('api response', res.data);
        setTask(res.data.tasks);
    }

    useEffect(()=>{
        fetchtask();
    },[])
  return (
    <>
    <TaskForm fetchtask={fetchtask} edittask={edittask} setEdittask={setEdittask}/>
    <TaskList task={task} fetchtask={fetchtask} setEdittask={setEdittask}/>
    </>
  )
}

export default TaskManager