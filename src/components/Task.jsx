import React from 'react'
import Tasks from './Tasks';
const Task = ({arr,deleteTask, changeTaskStatus}) => { 
  return (
    <div>
      <div className="tasks-box" >
        <div className="container">
          <div className="content">
            {arr.map((task)=>(  
              <div className="task-box"key={task.id} id={task.id} onDoubleClick={()=>changeTaskStatus(task)}>
                <p className={task.isDone?"complete":"not-complete"}>{task.taskContent}</p>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task