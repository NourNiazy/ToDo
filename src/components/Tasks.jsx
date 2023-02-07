import React from 'react'
import { useState } from 'react';
import {style} from "../css/tasks.css";
import Task from './Task';
import TaskForm from './TaskForm';
const Tasks = () => {
  const [arr,setArray] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    const addToArray=(task)=>{
      
     let taskObject={
    taskContent:task,
    id:arr.length+1
  } 
      // add task to array
      arr.push(taskObject);

      // update array
      setArray([...arr])
    }
    const deleteTask=(id)=>{
    const newarr = arr.filter((task) => task.id !== id);
      setArray([...newarr]);
    }
    
  return (
    <div className="tasks">
      <TaskForm handleSubmit={handleSubmit} addToArray={addToArray}/>
      <Task arr={arr} deleteTask={deleteTask}/>
    
    </div>
    
  )
}

export default Tasks
