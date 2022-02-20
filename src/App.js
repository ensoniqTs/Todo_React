import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import TodoModal from './TodoModal/TodoModal';
import './App.css';
import Modal from './components/Modal/Modal';
import { Button } from '@mui/material';
import TodoItem from './components/Todo/TodoItem';

function App(props) {
  const [active, setActive] = useState(false)
  return (
    <div className='todoStart'>
      <Todo />
      <div className='btn'>
        <Button variant="contained" color="success" onClick={() => setActive(true)} >Add</Button>
        <Modal active={active} setActive={setActive} />

      </div>



    </div>
  );
}

export default App;
