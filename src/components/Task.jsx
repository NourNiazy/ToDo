import React from 'react'
import Tasks from './Tasks';
const Task = ({arr,task}) => {
  return (
    <div>
      <div className="tasks-box">
      <div className="container">
        <div className="content">
              {arr.map((task)=>(
                
            <div className="task-box"key={task.id} id={task.id}>
              <p >{task.taskContent}</p>
              
            </div>
              ))}
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default Task
