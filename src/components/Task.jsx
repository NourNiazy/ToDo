import React from 'react'
import Tasks from './Tasks';
const Task = ({arr,setArray}) => {
  const deleteTask=(id)=>{
    const newarr = arr.filter((task) => task.id !== id);
      console.log("delete");
      console.log(id);
      setArray([...newarr])
      console.log(newarr);
    }
  return (
    <div>
      <div className="tasks-box">
      <div className="container">
        <div className="content">
              {arr.map((task)=>(
                
            <div className="task-box"key={task.id} id={task.id}>
              <p >{task.taskContent}</p>
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
