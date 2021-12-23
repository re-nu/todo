import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function TodoList({ list, checked, setchecked }) {

  return (
    <div className='todo-list'>
      <FormControlLabel control={<Checkbox
        onClick={(e) => {
          if (e.target.checked === true) {
            setchecked([...checked, e.target.name]);
          }
          else {
            const remaining = checked.filter((i) => !(i === e.target.name));
            setchecked([...remaining]);
          }

        }} />} label={list} name={list} />
    </div>
  );
}
