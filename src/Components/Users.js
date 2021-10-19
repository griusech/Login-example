import React from 'react'
import { Link } from 'react-router-dom'
import { useUsersState } from '../context/UserContext'

const Users = () => {
    const { allUsers, deleteUser } = useUsersState()

    return (
        <div className="container mt-5">
            <table class="table table-striped content-table">
                <thead className="bg-info text-white">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) =>
                        <tr>
                            <th scope="row">{user?.id.slice(0, 5)}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <Link to={"/update/" + user.id}>
                                    <button className="btn btn-warning">Editar</button>
                                </Link>
                                <button className="btn btn-danger ml-2" onClick={() => deleteUser(user.id)}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Users
