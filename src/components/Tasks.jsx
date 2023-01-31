import React from 'react'
import { useState } from 'react';
import {style} from "../css/tasks.css";
import Task from './Task';
import { useParams } from "react-router-dom";
const Tasks = () => {
  const [arr,setArray] = useState([]);
  const [InputData, setInputData] = useState([]);
  const [isDisabled, setDisabled] = useState(true);
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        
    }
    const addToArray=()=>{
      if(InputData==""){
        console.log("empty");
      }
      else {
        
      arr.push(InputData);
      setArray([...arr])
      setInputData([""]);
      }
     
      

    }
  return (
    <div className="tasks">
      <div className='tasks-form'>
      <div className="container">
        <div className="content">
          <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setInputData(e.target.value)}  value={InputData} placeholder='Write a Task....'name='text' className='todo-input' />
                <button className='todo-button'  onClick={addToArray}>Add Task</button>
            </form>
        </div>
    </div>
    </div>
    <Task arr={arr}/>
    
    </div>
    
  )
}

export default Tasks
