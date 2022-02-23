const TodoTitle = (props) => {

    return (
        <div>
            <div className="title">
                {props.titleTodo}
                <span onClick={() => props.removeTitle(props.title.id)}>&#10008;</span>
            </div>
        </div >
    )
}
export default TodoTitle