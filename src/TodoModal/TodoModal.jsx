import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import s from './TodoModal.module.css'
import uuid from 'react-uuid'
import { Button } from "@mui/material"


const TodoItem = () => {

}

const TodoModal = () => {



    let [todo, setTodo] = useState({
        todos: [],
        newTodo: ''

    })

  
    let todoElement = React.createRef()
    let addTodo = () => {

        let newChangeTodo = {
            title: 'Title',
            todo: todo.newTodo,
            checked: false,
            id: uuid()
        }

        todo.todos.push(newChangeTodo)
        todoElement.current.value = ''
        
        
    }
    let todoChange = () => {
        let text = todoElement.current.value
        todo.newTodo = text
    }
  
    let element = todo.todos.map(e => e.todo )

    return (
        <div className={s.body}>
            <div className={s.item}>
                <h2>Todo test</h2>
                <div>
                    <input type="text" placeholder="Введите заголовок" />
                    <Button variant='contained'>Save</Button>
                </div>

                <div>
                    <input placeholder="введите дело" ref={todoElement} onChange={todoChange} />
                    
                    <Button variant='contained' onClick={addTodo}>Save</Button>
                </div>
                {element}
                <NavLink to='/close'>Close</NavLink>

            </div>
            <div>
                ppp;l
            </div>

        </div>
    )
}

export default TodoModal