import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const RegisteredUsers = () => {
    return (
        <div>
            <Doughnut 
            data = {{
                labels: [
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sábado'
                ],
                datasets: [{
                  label: 'Count of Register',
                  data: [12, 30, 40, 24, 32, 16],
                  backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  hoverOffset: 1
                }]
            }}
            />
        </div>
    )
}

export default RegisteredUsers
