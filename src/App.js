import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // function for input change
  const handleInputChange = (e) => {
    // getting what was typed in the input
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      // grabbing the length of the todolist and adding 1 to the current number of task in the list. 
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    
    // adding the old todolist to the newTask
    setTodoList([...todoList, task]);

     //clear the input field
    setNewTask(""); 
  };

  const deletTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  //Changing the background to green when the completed button is clicked.
  const taskCompleted = (id) => {
    setTodoList(
      todoList.map((task, key) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} placeholder='Enter your task' onChange={handleInputChange}/>
        <button className="add" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return(
          <Task 
          taskName={task.taskName} 
          id={task.id} 
          completed={task.completed}
          deletTask={deletTask} 
          taskCompleted={taskCompleted}
          />
          );
        })}
      </div>
    </div>
  );
}

export default App;
