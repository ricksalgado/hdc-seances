import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // id, text, if done
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    // Local Storage
  };

  return (
    <div>
      <h1>Shopify do</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
