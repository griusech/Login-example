import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useUsersState } from '../context/UserContext';

const Login = () => {
    const { signIn, setCurrentUser } = useUsersState()

    const [error, setError] = useState("")
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const user = signIn(email, password)

        if (email.trim() === '' || password.trim() === '') {
            setError('Los campos no pueden quedar vacios')
            setTimeout(() => setError(''), 3000)
        }
        if (user) {
            setCurrentUser(user)
            history.push('/')
        } else {
            setError('Usuario o contraseña incorrectos')
            setTimeout(() => setError(''), 2000)
        }
    }

    return (
        <div className="container mt-5 text-center">
            <div className="card w-50 m-auto">
                <div className={error ? 'card-header bg-danger text-white' : 'card-header bg-info text-white'}>
                    {error ? error : 'LOGIN'}
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link to="/register">
                            <button type="submit" className="btn btn-warning ml-2">
                                Regístrate
                            </button>
                        </Link>
                    </form>

                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Login
