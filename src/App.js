import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import TodoModal from './TodoModal/TodoModal';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div >

        {/* <TodoBody /> */}
      </div>
      <Routes>
        <Route path='/modal' element={<TodoModal />} />
        <Route path='/close' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
