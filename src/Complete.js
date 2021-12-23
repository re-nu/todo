import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


export function Complete({ checked }) {

  return (
    checked.length > 0 ? <CompleteList checked={checked} /> : "list is empty"
  );

}

function CompleteList({checked}) {
    const history=useHistory()
    return(
      <div className='complete'>
          <Button
        onClick={() => history.goBack()}
        variant="outlined">Back
      </Button>

        {checked.map((i)=>(
            <div className="completedList">
               {i}
            </div>
            
        ))}
      </div>
    )
  }
  
