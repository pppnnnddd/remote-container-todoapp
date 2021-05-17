import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTodo from './components/CreateTodo'
import { List, Grid, InputLabel } from '@material-ui/core';
import Todo from './components/Todo'
import './App.css';

function App() {

  const [data, setData] = useState({ todos: [] });

  const config = {
    // headers: { 'Access-Control-Allow-Origin': '*' }
  }

  const configs = { ...config }
  const fetchData = async () => {
    const result = await axios(
      '/todos', configs
    );
    console.log(result.data)
    setData({ todos: result.data});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="App">
      <header className="App-header">
        <p>
          golang and React Example Todo App
        </p>
      </header>
      <div className="Main">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CreateTodo fetchTodos={fetchData} className="CreateTodo"></CreateTodo>
        </Grid>
        <Grid item xs={12} className="Todos">
          <List>
            {data.todos.map(todo => (
              <Todo todo={todo} fetchTodos={fetchData}></Todo>
          ))}
          </List>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default App;
