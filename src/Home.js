import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { TodoList } from './TodoList';

export function Home({ todo, settodo, addTodo, setaddTodo, checked, setchecked }) {
  const history = useHistory();
  console.log(checked);
  return (
    <div className="App">
      <TextField
        onChange={(event) => setaddTodo(event.target.value)}
        id="standard-basic" label="Add to todo list" variant="standard" />

      <Button
        onClick={() => settodo([...todo, addTodo])}
        variant="outlined">Add
      </Button>

      <Button
        onClick={() => history.push('/completed')}
        variant="outlined">Completed list
      </Button>


      {todo.map((td, index) => (
        <TodoList list={td} checked={checked} setchecked={setchecked} key={index} />
      ))}
    </div>
  );

}
