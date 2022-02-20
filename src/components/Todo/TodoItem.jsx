import { Button } from "@mui/material"
import s from './TodoItem.module.css'

const TodoItem = (props) => {
    return (
        <ul>
            <li className={s.items}>
                <input type="checkbox" id="" />
                {props.item}
                <Button variant="contained" color="success">Delete</Button>
            </li>

        </ul>
    )
}
export default TodoItem