import React from 'react'
import Tasks from './Tasks';
const Task = ({arr}) => {
  return (
    <div>
      <div className="tasks-box">
      <div className="container">
        <div className="content">
              {arr.map((item)=>(
                
            <div className="task-box"key={item}>
              <p >{item}</p>
              
            </div>
              ))}
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default Task
