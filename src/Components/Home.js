import React from 'react'
import { useUsersState } from '../context/UserContext'
import Users from './Users'

const Home = () => {

    const { currentUser } = useUsersState()

   return (
        <>
            <div className="text-center mt-5">
                <h3>Bienvenido {currentUser.name}</h3>
            </div>
            <div classNAME="card">
                <Users />
            </div>
        </>
    )
}

export default Home
