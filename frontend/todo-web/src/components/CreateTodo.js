import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './CreateTodo.css';


const CreateTodo = ({fetchTodos}) => {

    const [title, setTitle] = useState("");

    const onClick = event => {
        console.log("onclick")
        console.log(title)

        const request = {}
        request.name = title
        axios.post(`/todos`, request, {})
            .then(response => {
                fetchTodos(response.data);
            });
    }


  return (
    <div>
      <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e) => setTitle(e.target.value)} />
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CreateTodo;