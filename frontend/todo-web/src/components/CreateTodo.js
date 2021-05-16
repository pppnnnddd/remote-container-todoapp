import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Fab } from '@material-ui/core';
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
    <div className="CreateTodo">
      <TextField id="filled-basic" label="Filled" variant="filled" value={name} onChange={(e) => setName(e.target.value)} className="Todo" />
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <AddIcon className="AddButton" />
      </Fab>
    </div>
  );
}

export default CreateTodo;