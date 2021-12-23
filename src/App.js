import { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Home } from './Home';
import { Complete } from './Complete';

function App() {
  const [todo,settodo]=useState(["code kata","web kata","class tasks"])
  const [addTodo,setaddTodo]=useState("")
  const [checked,setchecked]=useState([])
  const history=useHistory()
  console.log(checked)
  return (
    <div className="App">
     

      {/* <Link to ="/completed">Completed list</Link> */}

      <Switch>
        <Route exact path="/">
          <Home 
            todo={todo} settodo={settodo} 
            addTodo={addTodo} setaddTodo={setaddTodo} 
            checked={checked} setchecked={setchecked}
          />
        </Route>
        <Route path="/completed">
          <Complete checked={checked}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;


