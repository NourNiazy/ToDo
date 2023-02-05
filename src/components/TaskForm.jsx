import React from 'react'
import { useState} from 'react';
const TaskForm = ({handleSubmit,addToArray}) => {
  
  const [InputData, setInputData] = useState([]);
  return (
    
      <div className='tasks-form'>
      <div className="container">
        <div className="content">
          <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setInputData(e.target.value)}  value={InputData} placeholder='Write a Task....'name='text' className='todo-input' />
                <button className='todo-button' onClick={addToArray} disabled={InputData==""?true:false}>Add Task</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default TaskForm
