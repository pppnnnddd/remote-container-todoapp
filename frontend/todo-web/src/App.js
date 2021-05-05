import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTodo from './components/CreateTodo'
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
        <CreateTodo myFunc={fetchData}></CreateTodo>
      </div>
      <div className="Todos">
        <ul>
          {data.todos.map(todo => (
          <li key={todo.id}>
            <div>{todo.name} : {todo.status}</div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
