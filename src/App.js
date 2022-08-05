import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import Modal from './components/Modal/Modal';
import { Button } from '@mui/material';
import uuid from 'react-uuid'
import TodoTitle from './components/Todo_Title';

function App() {
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState(
    JSON.parse(localStorage.getItem('title')) || []
  )
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  useEffect(() => {
    localStorage.setItem('title', JSON.stringify(title))
  }, [title])

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
  const addTitle = (addTodoTitle) => {

    if (addTodoTitle) {
      const newTitle = {
        id: uuid(),
        todoTitle: addTodoTitle,
      }
      setTitle([...title, newTitle])
    }
  }
  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const removeTitle = (id) => {
    setTitle([])
    console.log(title)
  }
  const handleTogle = (id) => {
    setTodos([...todos])
  }
  const titleTodo = title.map(e => e.todoTitle)
  const Todos = todos.map((todo) => {

    return (
      <Todo
        todo={todo}
        removeTodo={removeTodo}
        handleTogle={handleTogle}
        key={todo.id}
        active={active}
        setActive={setActive}
      />
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
          addTitle={addTitle}
          Todos={Todos}
        />

      </div>

      <div className='todo_render'>
        <TodoTitle
          title={title}
          titleTodo={titleTodo}
          removeTitle={removeTitle}
        />
        {Todos}

      </div>

    </div>
  );
}

export default App;
