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
      
      let taskObject = {
        taskContent:task,
        id:arr.length+1,
        isDone: false
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


    const changeTaskStatus = (t) => {

      // copy arr in `indexOfTask`
      let currnetArr = arr

      // get index of t
      const indexOfTask = arr.findIndex((task) => task.id == t.id);

      // change isDone
      t.isDone = !t.isDone

      // update task in `currnetArr` array in index `indexOfTask`
      currnetArr[indexOfTask] = t

      // update new array with `indexOfTask`
      setArray([...currnetArr]);
    
    }
    
  return (
    <div className="tasks">
      <TaskForm handleSubmit={handleSubmit} addToArray={addToArray}/>
      <Task arr={arr} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>
    
    </div>
    
  )
}

export default Tasks
