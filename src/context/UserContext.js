import React, { createContext, useState, useEffect, useContext } from 'react'
import swal from 'sweetalert';

const UserContext = createContext()
export const useUsersState = () => useContext(UserContext)

export const UserProvider = (props) => {
    
    const [currentUser, setCurrentUser] = useState()

    let usersInitials = JSON.parse(localStorage.getItem('users'));
    if(!usersInitials) {
        usersInitials = [];
    }

    const [allUsers, setAllUsers] = useState(usersInitials)

    useEffect( () => {
        let usersInitials = JSON.parse(localStorage.getItem('users'));
        
        if(usersInitials) {
            localStorage.setItem('users', JSON.stringify(allUsers))
        } else {
            localStorage.setItem('users', JSON.stringify([]));
        }
    }, [allUsers] );

    const signIn = (email, password) => {
        const user = allUsers.find(user => user.email === email && user.password === password)
        return user
    }

    const createUser = user => {
        setAllUsers([...allUsers, user])
    }

    const deleteUser = id => {
        const newUsers = allUsers.filter(user => user.id !== id );
        swal({
            title: "¡Cuidado!",
            text: "¿Realmente desea eliminar el usuario?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("¡Usuario eliminado!", {
                  icon: "success",
            });
            setAllUsers(newUsers);
            } else {
              swal("El usuario no fue eliminado");
            }
          });
     }

     const handleUpdate = (id, updatedUser) => {
        const newUser = allUsers.map((user) => {
            if ( user.id === id ) {
                return {
                    ...user,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    password: updatedUser.password,
                    confirmPassword: updatedUser.confirmPassword
                }
            }
            return user
        })
        setAllUsers(newUser)
    }

    const value = {
        signIn,
        createUser,
        allUsers,
        deleteUser,
        setAllUsers,
        setCurrentUser,
        handleUpdate,
        currentUser
    }
    
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )

}