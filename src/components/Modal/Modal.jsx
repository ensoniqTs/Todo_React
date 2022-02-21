import { Button } from "@mui/material"
import s from './Modal.css'
import React, { useState } from "react"
import uuid from 'react-uuid'
import TodoItem from "../Todo/TodoItem"



const Modal = (props) => {

    const [todoInput, setTodoInput] = useState('')

    const handSubmit = (e) => {
        e.preventDefault()
        props.addTodo(todoInput)
        setTodoInput('')
    }

    const onChange = (e) => {
        setTodoInput(e.currentTarget.value)


    }
    const handleKeyPres = () => {

    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
                <div>
                    <form onSubmit={handSubmit} className="todo_input">
                        <input
                            value={todoInput}
                            type='text'
                            onChange={onChange}
                            onKeyDown={handleKeyPres}
                            placeholder='input todo'
                        />
                        <button variant="contained" color="success">Add</button>
                    </form>
                    <div >
                        {props.Todos}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal