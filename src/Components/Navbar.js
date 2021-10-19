import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useUsersState } from '../context/UserContext'

const Navbar = () => {
    const history = useHistory()

    const { currentUser, setCurrentUser } = useUsersState()

    const logOut = () => {
        setCurrentUser()
        history.push('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        WISPRO
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        {currentUser &&
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/statistics">
                                        <button className="btn btn-info mr-3"> Estadísticas </button>
                                    </Link>
                                    <button className="btn btn-light" onClick={() => logOut()}> Logout </button>
                                </li>
                            </ul>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
