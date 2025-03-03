const TaskList = ({tasks}) => {
// [{id:01, text:"" },{id:02, text:"" },{id:03, text:"" }]


    if(tasks.length === 0) {return <p>No tasks to show</p>};

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}

        </ul>
    );
};

export default TaskList;
