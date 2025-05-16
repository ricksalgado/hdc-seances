import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onToggleDone={() => onToggleTaskDone(task.id) }
            
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
