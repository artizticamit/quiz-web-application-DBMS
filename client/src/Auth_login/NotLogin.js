import React from 'react';
import { Link } from 'react-router-dom'


function NotLogin() {
    return (
        <div>
            <Link to='/login'>Go back to Login</Link>
            <h1>You're Not logged in. First login to access this page.</h1>
        </div>
    )
}

export default NotLogin
