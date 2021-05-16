import React, { useState } from 'react';
import axios from 'axios';
import { ListItem, Grid, Checkbox, IconButton } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import './Todo.css';


const Todo = ({todo, fetchTodos}) => {

    const [checked, setChecked] = useState(false);
    //setChecked(todo.status=="Done")
    const onClickDelete = event => {
        console.log("onclick")
        console.log(todo.id)
        axios.delete(`/todos/${todo.id}`, {})
            .then(response => {
                fetchTodos(response.data);
            });
    }

    const changeStatus = event => {
        console.log("changeStatus")
        console.log(todo.id)
        setChecked(!checked)
        axios.post(`/todos/${todo.id}/start`, {})
        axios.post(`/todos/${todo.id}/done`, {})
        .then(response => {
            fetchTodos(response.data);
        });
    }

  return (
    <ListItem className="TodoItem">
        <Grid container spacing={3} className="Todo">
            <Grid item xs={2}>
                <Checkbox
                    checked={checked}
                    onChange={changeStatus}
                    disabled={checked}
                >
                </Checkbox>
            </Grid>
            <Grid item xs={8}>
                <label>{todo.name}</label>
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="delete" onClick={onClickDelete}>
                    <Delete />
                </IconButton>
            </Grid>
        </Grid>
    </ListItem>
  );
}

export default Todo;