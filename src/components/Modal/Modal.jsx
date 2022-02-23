import { Button } from "@mui/material"
import s from './Modal.css'
import React, { useEffect, useState } from "react"
import uuid from 'react-uuid'
import { createRef } from "react"




const Modal = (props) => {

    const [todoInput, setTodoInput] = useState(
        JSON.parse(localStorage.getItem('todoInput')) || ''
    )
    const [todoTitle, setTodoTitle] = useState(
        JSON.parse(localStorage.getItem('todoTitle')) || ''
    )
    useEffect(() => {
        localStorage.setItem('todoInput', JSON.stringify(todoInput))

    }, [todoInput])
    useEffect(() => {
        localStorage.setItem('todoTitle', JSON.stringify(todoTitle))
    }, [todoTitle])

    const handSubmit = (e) => {
        e.preventDefault()
        props.addTodo(todoInput)
        setTodoInput('')
        props.addTitle(todoTitle)
        setTodoTitle('')
    }

    const onChange = (e) => {
        setTodoInput(e.currentTarget.value)
    }
    const titleAdd = (e) => {
        setTodoTitle(e.currentTarget.value)
        console.log(todoTitle)
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>

            <div className={props.active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}>
                <div className="close" onClick={() => props.setActive(false)}>&#10008;</div>
                <div className="input_data">
                    <form onSubmit={handSubmit} className="todo_input">
                        <div>
                            <input type='text'
                                value={todoTitle}
                                onChange={titleAdd}
                                placeholder='input title'
                            />
                            <button variant="contained" color="success" >Save</button>
                        </div>
                        <div>
                            <input maxLength='2000'

                                value={todoInput}
                                type='text'
                                onChange={onChange}
                                placeholder='input todo'
                            />
                            <button variant="contained" color="success">Add</button>
                        </div>


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