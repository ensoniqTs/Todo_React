import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';

import './App.css';
import Modal from './components/Modal/Modal';
import { Button } from '@mui/material';

import uuid from 'react-uuid'

function App() {
  const [active, setActive] = useState(false)

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todoInput) => {
    if (todoInput) {
      const newItem = {
        id: uuid(),
        todoItem: todoInput,
        date: new Date,
        complite: false
      }
      console.log(newItem)
      setTodos([...todos, newItem])

    }
  }

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])

  }

  const handleTogle = (id) => {
    setTodos([...todos])
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
      <header>
        Todo List
      </header>

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
