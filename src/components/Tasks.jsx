import React from 'react'
import { useState } from 'react';
import {style} from "../css/tasks.css";
import Task from './Task';
import TaskForm from './TaskForm';
const Tasks = () => {
  const [arr,setArray] = useState([]);
  const id=arr.length+1;
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    /* {
    taskContent:InputData,
    id:arr.length+1
  } */
    const addToArray=(task)=>{
      
     let taskObject={
    taskContent:task,
    id:arr.length+1
  } 
      console.log(arr.length);

      // log paramter value
      console.log(taskObject.taskContent);
console.log(taskObject.id);
      // add task to array
      arr.push(taskObject);

      // update array
      setArray([...arr])
    }
    
    
  return (
    <div className="tasks">
      <TaskForm handleSubmit={handleSubmit} addToArray={addToArray}/>
      <Task arr={arr} setArray={setArray}/>
    
    </div>
    
  )
}

export default Tasks
