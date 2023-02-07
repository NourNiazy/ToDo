import React from 'react'
import Tasks from './Tasks';
const Task = ({arr,deleteTask}) => { 
  return (
    <div>
      <div className="tasks-box" >
        <div className="container">
          <div className="content">
            {arr.map((task)=>(  
              <div className="task-box"key={task.id} id={task.id} onDoubleClick={task.isDone=!task.isDone}>
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
