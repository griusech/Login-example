import React from 'react'
import CountLogins from './Graphics/CountLogins'
import RegisteredUsers from './Graphics/RegisteredUsers'

const Statistics = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <CountLogins />
            </div>
            <div className="col-md-6">
                <RegisteredUsers />
            </div>
        </div>
    )
}

export default Statistics
