import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import s from './TodoModal.module.css'
import uuid from 'react-uuid'


const TodoItem = () => {

}

const TodoModal = () => {



    let [todo, setTodo] = useState({
        todos: [{ todo: '' }],
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
        console.log(todo)
    }
    let todoChange = () => {
        let text = todoElement.current.value
        todo.newTodo = text
    }

    return (
        <div className={s.body}>
            <div className={s.item}>
                <h2>Todo test</h2>
                <div>
                    <input type="text" placeholder="Введите заголовок" />
                    <button >Save</button>
                </div>

                <div>
                    <input placeholder="введите дело" ref={todoElement} onChange={todoChange} />
                    <button onClick={addTodo}>Save</button>
                </div>

                <NavLink to='/close'>Close</NavLink>

            </div>

        </div>
    )
}

export default TodoModal