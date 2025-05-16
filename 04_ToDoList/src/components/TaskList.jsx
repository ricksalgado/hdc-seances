import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => {
    if(tasks.length === 0){
        return <h2>Nothing to do for now</h2>;

    }


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
