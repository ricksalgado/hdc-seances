import React from "react";
import Task from "./Task";

const TaskList = ({tasks}) => {
  return (
    <div>
      <ul>
        <Task />
        <Task />
        <Task />
        <Task />
        {tasks.map((task) -> (
            <Task key={task.id} task={task} />
        ))};
      </ul>
    </div>
  );
};

export default TaskList;
