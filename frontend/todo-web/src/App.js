import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTodo from './components/CreateTodo'
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
      <div>
        <CreateTodo fetchTodos={fetchData}></CreateTodo>
      </div>
      <div className="Todos">
        <ol>
          {data.todos.map(todo => (
          <li key={todo.id}>
            <Todo todo={todo} fetchTodos={fetchData}></Todo>
          </li>
        ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
