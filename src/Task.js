const Task = (props) => {
    return (
        <div className="task">
            <h1>{ props.taskName }</h1>
            <button style={{background: props.completed ? "green" : "white"}} onClick={() => props.taskCompleted(props.id)}>Completed</button>
            <button onClick={() => props.deletTask(props.id)}>Delete Task</button>
        </div>
    );
}
 
export default Task;