import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'



const Todo = (props) => {
    const todoComplite = () => {

        props.todo.complite = true
        console.log(props.todo)
    }

    return (
        <div key={props.key} className='todo_end'>
            <div >
                <input type="checkbox" onClick={todoComplite} />

                {props.todo.todoItem}
            </div>
            <button variant="contained" color="success" onClick={() => props.removeTodo(props.todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default Todo