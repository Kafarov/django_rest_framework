const UserItem = ({ user }) => {
    return (
        <tr>
            <td>username</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}


const UserList = ({ users }) => {
    return (
        <div className='grid content'>
            <table className="table">
                <th>User name</th>
                <th>First name</th>
                <th>Last name</th>
                <th className="lastTh">Email</th>
                {users.map((user_) => <UserItem user={user_} />)}
            </table>
        </div>
    )
}

export default UserList