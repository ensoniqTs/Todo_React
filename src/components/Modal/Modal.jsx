import { Button } from "@mui/material"
import s from './Modal.css'
import React, { useState } from "react"
import uuid from 'react-uuid'
import TodoItem from "../Todo/TodoItem"



const Modal = (props) => {
    let [todo, setTodo] = useState({
        todos: [],
        newTodo: ''

    })
    let todoElement = React.createRef()
    let element = todo.todos.map(e => <TodoItem item={e.todo} />)
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


    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
                <div>
                    <div className="todo_input">
                        <input ref={todoElement} onChange={todoChange} />
                        <Button variant="contained" color="success" onClick={addTodo}>Add</Button>
                    </div>
                    <div className="formItems">
                        {element}


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal