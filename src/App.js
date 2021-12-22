import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const [todo,settodo]=useState(["code kata","web kata","class tasks"])
  const [addTodo,setaddTodo]=useState("")
  const [checked,setchecked]=useState([])
  console.log(checked)
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
      <Button 
       onClick={()=>{<Complete checked={checked} />}
      }
       variant="outlined">Completed
      </Button>
        {todo.map((td,index)=>(
          <TodoList list={td} checked={checked} setchecked={setchecked} key={index}/>
        ))}
    </div>
  );
}

export default App;

function Complete({checked}) {
  console.log("complete component")
  return(
    <div className='complete'>
      {checked.map((i)=>(
        <div className='complete-item'>
          {i}
        </div>
      ))}
    </div>
  )
  
}

function TodoList({list,checked,setchecked}) {
  
  return(
    <div className='todo-list'>
      <FormControlLabel control={<Checkbox 
      onClick={(e)=>{
        if(e.target.checked===true){
          setchecked([...checked,e.target.name])
        }
        else{
          const remaining=checked.filter((i)=>!(i===e.target.name))
           setchecked([...remaining])
        }
        
      }}
       />} label={list} name={list} />
    </div>
  )
}