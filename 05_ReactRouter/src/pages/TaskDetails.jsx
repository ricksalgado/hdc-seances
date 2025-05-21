import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const { taskId } = useParams();

  return (
    <div>
      <h2>Task Detail</h2>
      <p>This is the task: {taskId}</p>
    </div>
  )
}

export default TaskDetails
