import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import TodoModal from './TodoModal/TodoModal';
import './App.css';
import Modal from './components/Modal/Modal';
import { Button } from '@mui/material';
import TodoItem from './components/Todo/TodoItem';
import uuid from 'react-uuid'

function App() {
  const [active, setActive] = useState(false)
  const [todos, setTodos] = useState([])

  const addTodo = (todoInput) => {
    if (todoInput) {
      const newItem = {
        id: uuid(),
        todoItem: todoInput,
        complite: false
      }
      console.log(newItem)
      setTodos([...todos, newItem])

    }
  }

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])

  }

  const handleTogle = () => {

  }

  const Todos = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        removeTodo={removeTodo}
        handleTogle={handleTogle}
        key={todo.id}
        active={active}
        setActive={setActive} />
    )
  })

  return (
    <div className='todoStart'>
      Todo
      <div className='btn'>
        <Button variant="contained" color="success" onClick={() => setActive(true)} >Add</Button>
        <Modal active={active}
          setActive={setActive}
          addTodo={addTodo}
          Todos={Todos}
        />

      </div>

      <div className='todo_render'>
        {Todos}

      </div>

    </div>
  );
}

export default App;
