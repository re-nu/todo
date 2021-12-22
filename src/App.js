import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const [todo,settodo]=useState(["code kata","web kata","class tasks"])
  const [addTodo,setaddTodo]=useState("")
  return (
    <div className="App">
     <TextField 
       onChange={(event)=>setaddTodo(event.target.value)}
       id="standard-basic" label="Add to todo list" variant="standard"
      />
      
      <Button 
       onClick={()=>settodo([...todo,addTodo])}
       variant="outlined">Add
      </Button>
        {todo.map((td)=>(
          <TodoList list={td}/>
        ))}
    </div>
  );
}

export default App;

function TodoList({list}) {
  return(
    <div className='todo-list'>
      <FormControlLabel control={<Checkbox  />} label={list} />
    </div>
  )
}