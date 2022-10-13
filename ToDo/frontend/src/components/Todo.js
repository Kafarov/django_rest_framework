const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>{todo.project}</td>
            <td>{todo.created_user}</td>
            <td>{todo.body}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td>{todo.status}</td>
        </tr>
    )
}


const TodoList = ({ todo }) => {
    return (
        <div className='grid content'>
            <table className="table">
                <th>Project</th>
                <th>Created user</th>
                <th>Body</th>
                <th>Created</th>
                <th>Updated</th>
                <th className="lastTh">Status</th>
                {todo.map((todo_) => <TodoItem todo={todo_} />)}
            </table>
        </div>
    )
}

export default TodoList