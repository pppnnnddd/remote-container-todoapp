import React, { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './CreateTodo.css';


const CreateTodo = ({fetchTodos}) => {

    const [name, setName] = useState("");

    const onClick = event => {
        const request = {}
        request.name = name
        axios.post(`/todos`, request, {})
            .then(response => {
                fetchTodos(response.data);
            });
        setName("")
    }

  return (
    <Grid className="CreateTodo" container spacing={3}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9}>
        <TextField id="outlined-full-width" fullWidth label="todo" variant="filled" value={name} onChange={(e) => setName(e.target.value)} className="Todo" />
      </Grid>
      <Grid item xs={2}>
        <Fab color="primary" aria-label="add" onClick={onClick}>
          <AddIcon className="AddButton" />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default CreateTodo;