import axios from 'axios';
import { Grid, Checkbox, IconButton } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import './Todo.css';


const Todo = ({todo, fetchTodos}) => {

   const onClick = event => {
        console.log("onclick")
        console.log(todo.id)
        axios.delete(`/todos/${todo.id}`, {})
            .then(response => {
                fetchTodos(response.data);
            });
    }

  return (
    <div>
        <Grid container spacing={3} className="Todo">
            <Grid item xs={2}>
                <Checkbox>
                </Checkbox>
            </Grid>
            <Grid item xs={8}>
                {todo.name}
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="delete" onClick={onClick}>
                    <Delete />
                </IconButton>
            </Grid>
        </Grid>
    </div>
  );
}

export default Todo;