import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


export default function TaskManager() {
  const [tasks, setTasks] = useState([
    "follow up call needed",
    "contact the local authority",
    "Book in another meeting",
    "Speak to the GP about XYZ",
    "you need to call her about ...",
    "Submission deadline"
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <div className="container-Fulid mt-2">
      <div className="d-flex justify-content-between align-items-center mb-4"  style={{ borderBottom: "1px solid black" }}>
        <h6>Tasks</h6>
        <div className="d-flex mb-2" >
            <strong>
          <button style={{width:"50px", height:"20px", fontSize:"8px",}} className="btn btn-outline-secondary btn-sm me-2">25 To Do</button>
          <button  style={{width:"50px", height:"20px", fontSize:"8px"}} className="btn btn-outline-secondary btn-sm me-2">43 Done</button>
          <button style={{width:"50px", height:"20px", fontSize:"8px"}} className="btn btn-outline-info btn-sm">Filters</button>
          </strong>
        </div>
      </div>

      <div className="input-group mb-3">
        <input style={{borderRadius:"10px"}}
          type="text"
          className="form-control"
          placeholder="Add your next task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button style={{width:"60px", height:"25px", fontSize:"8px",margin:"10px"}} className="btn btn-danger" onClick={addTask}>Save Task</button>
      </div>

      <div className="list-group">
        {tasks.map((task, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              
              <label  className="form-check-label"   htmlFor={`task-${index}`} >
                {task}
              </label>
            </div>
           
        
           
            <div className='d-flex'>
            <b><input className="d-flex me-2" type="checkbox" id={`task-${index}`} /></b>
                <FontAwesomeIcon icon={faGear} />
                </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-primary me-2">← Previous</button>
        <button className="btn btn-outline-primary">Next →</button>
      </div>
    </div>
  )
}