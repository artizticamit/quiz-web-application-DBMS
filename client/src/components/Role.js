import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


function Role() {

    const history = useHistory();



    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');


    useEffect(()=>{
        Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
                console.log(response.data);
                if(response.data.data === true)
                {
                    setUsername(response.data.username);

                    console.log(response.data.username);


                }
                else{
                    console.log("Error");
                }
        })
    }, [])

    let handleStudentRole = ()=>{
        if(!name){
            alert("Enter name first");
        }
        else{

            setRole('student');
            Axios.post('http://localhost:8000/role', {role: 'student', name: name, username: username}).then((response)=>{
                console.log(response);
            })
            history.push('/login');
        }
    }

    let handleTeacherRole = ()=>{
        if(!name){
            alert("Enter name first");
        }else{

            setRole('teacher');
            Axios.post('http://localhost:8000/role', {role: 'teacher', name: name, username: username}).then((response)=>{
                console.log(response);
            })
            if(name)
            history.push('/login');
        }
    }



    return (
        <div>
        <a className="role-back-button" href='/signup' >Go Back</a>
        <h1 className="roles-heading" style={{textAlign:"center"}}>Select Your Role{role}</h1>
        <div className='roles-container' >

        <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />


            <div className="student-container roleSelector" id='student-role' onClick={handleStudentRole}>
                <h2 className="role-header">Student</h2>
                <div className="student-image">
                    <img className="students-image" alt='' src='./student.png' />
                </div>
                <p className="student-text-content">The student can give all the available quiz once and get the instant score and can see their result and and can easily and can also see the answer of the questions after completing the quiz and can also see what they attempted</p>
            </div>


            <div className="admin-container roleSelector" id='teacher-role' onClick={handleTeacherRole}>
                <h2 className="role-header">Teacher</h2>
                <div className="teacher-image">
                    <img className="teachers-image" alt='' src='./teacher.png' />
                </div>
                <p className="teacher-text-content">Teacher can create the quiz and question which will be vissible to all the students and teacher can also edit,update and remove the quiz and question and can also re-evaluate the quiz </p>
            </div>
        </div>
    </div>
    )
}

export default Role
