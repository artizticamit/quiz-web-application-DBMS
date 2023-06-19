import React,{useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom'

import Navbar from './Navbar.main';
import Axios from 'axios';

function StudentPage() {

    const [message, setMessage] = '';

    const history = useHistory();

    Axios.post('http://localhost:3000/checkStatus', {}).then(res=>{
        console.log(res.data);
        if(res.data.data === false)
        {
            history.push('/notlogin');
        }else{
            // Axios.post('http://localhost:3000/checkRole', {}).then(response=>{
            //     if(response.data.role != 'Student' || response.data.role != 'student'){
            //         setMessage('You are student, you cant access teachers page!')
            //     }
            // })
        }
    })

    return (
        <div>
        <div className="hidden">{message}</div>
            <Navbar role='Student'/>
            <h1>Student</h1>
        </div>
    )
}

export default StudentPage
