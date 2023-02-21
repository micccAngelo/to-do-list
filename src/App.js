import {useState} from 'react'
import AddTaskForm from './components/FormAdd'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  // Tasks state
  const [toDo, setToDo] = useState([])

  // Temp State
  const [newTask, setNewTask] = useState('')

  //add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1 
      setToDo([...toDo, 
        { id: num, title: newTask, status: false }
      ])
      setNewTask('')
    }
  }

  //delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
  }

  //mark done task
  const doneTask = (id) => {
    const newTasks = toDo.map((task) => {
        if (task.id === id){
          return ({ ...task, status: !task.status })
        }
        return task;
      });
      setToDo(newTasks);
  }


  return (
    <div className="container App">
    <br /><br />
    <h2>Tugas-1 (To Do List)</h2>
    <br /><br />

    <AddTaskForm 
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
    />

    {toDo && toDo.length ? '' : 'List Masih Kosong'}

    <ToDo
      toDo={toDo}
      doneTask={doneTask}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;
