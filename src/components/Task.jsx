import React from 'react'
import Tasks from './Tasks';
const Task = ({arr,setArray}) => {
  const deleteTask=(id)=>{
      console.log("delete");
      console.log(id);
      var newarr=arr;
      newarr.splice(id,1);
      setArray([...newarr])
      console.log(newarr);
    }
  return (
    <div>
      <div className="tasks-box">
      <div className="container">
        <div className="content">
              {arr.map((task,id)=>(
                
            <div className="task-box"key={task.id} id={task.id}>
              <p >{task.taskContent}</p>
              <button onClick={deleteTask} className="delete-btn">Delete</button>
            </div>
              ))}
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default Task
