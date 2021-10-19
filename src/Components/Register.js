import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link, useHistory } from 'react-router-dom'
import { useUsersState } from '../context/UserContext';
import swal from 'sweetalert';

const Register = () => {
    const history = useHistory()
    const { createUser } = useUsersState()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = user;

    const [error, setError] = useState('')

    const validFields = name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''
    const passwordLength = password.length < 6 && password.length < 6

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (validFields) {
            setError('Los campos no pueden estar vacios')
            setTimeout(() => setError(''), 2000)
        }
        else if (passwordLength) {
            setError('Contraseña mínima de 6 caracteres')
            setTimeout(() => setError(''), 2000)
        }
        else if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden')
            setTimeout(() => setError(''), 2000)
            return;
        } else {
            setError('')
            user.id = uuidv4()
            createUser(user)
            swal("¡Excelente!", "Usuario creado satisfactoriamente", "success");
            history.push('/login')
            setUser({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }

    const handleInput = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="container mt-5 text-center">

            <div className="card w-50 m-auto">
                <div className={error ? 'card-header bg-danger text-white' : 'card-header bg-info text-white'}>
                    {error ? error : 'REGISTRO'}
                </div>
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <div class="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={handleInput}
                                value={name}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleInput}
                                value={email}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleInput}
                                value={password}
                            />
                        </div>

                        <div class="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                onChange={handleInput}
                                value={confirmPassword}
                            />
                        </div>

                        <button type="submit" className="btn btn-success">Registrar</button>
                        <Link className="text-white" to="/login">
                            <button type="submit" className="btn btn-primary ml-2">
                                Volver
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
