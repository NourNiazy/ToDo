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

      
      console.log('inn parent');

      // log paramter value
      console.log(task);

      // add task to array
      arr.push(task);

      // update array
      setArray([...arr])
      
    }
  return (
    <div className="tasks">
      <TaskForm handleSubmit={handleSubmit} addToArray={addToArray}/>
      <Task arr={arr}/>
    
    </div>
    
  )
}

export default Tasks
