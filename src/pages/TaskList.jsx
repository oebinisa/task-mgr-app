import React from 'react'
import TaskItem from '../components/TaskItem'
import { Link } from 'react-router-dom'

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} />
          <Link to={`/tasks/${task.id}`}>View Details</Link>
          <br /><br />
        </div>
      ))}
    </div>
  )
}

export default TaskList
