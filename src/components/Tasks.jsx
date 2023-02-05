import React from 'react'
import { useState } from 'react';
import {style} from "../css/tasks.css";
import Task from './Task';
import TaskForm from './TaskForm';
const Tasks = ({InputData, setInputData}) => {
  const [arr,setArray] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    const addToArray=()=>{
      arr.push(InputData);
      setArray([...arr])
      setInputData([""]);
      
    }
  return (
    <div className="tasks">
      <TaskForm handleSubmit={handleSubmit} addToArray={addToArray}/>
      <Task arr={arr}/>
    
    </div>
    
  )
}

export default Tasks
