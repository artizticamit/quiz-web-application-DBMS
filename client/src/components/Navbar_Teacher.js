import React,{useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

function Navbar() {

    const history = useHistory();

    const [whereTo, setWhereTo] = useState('/login');
    const [loginStatus, setLoginStatus] = useState({message: "Login first ", status: false});

    const handleLogin= ()=>{
            Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
                console.log(response.data);
                if(response.data.data === true)
                {
                    setWhereTo('/main');
                    history.push('/main');
                    setLoginStatus({message: "You're Logged in", status: true});

                }
                else{
                    history.push('/login');
                    setLoginStatus({message: "You're Not logged In . First login ", status: false});
                }
            })
    }

    const handleLogout = ()=>{
        Axios.post('http://localhost:8000/logout').then(response=>{
            console.log(response);
            alert(response.data + " Succesfully Logged out");
            history.push({
                pathname: '/login'
            });
        })
    }

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <div>
                        <Link className='navbar-link' to='/Teacher_Home'>
                        <li className="navbar-items">Home</li>
                        </Link>
                        <Link className='navbar-link' to='/Teacher_About'>
                        <li className="navbar-items">About</li>
                        </Link>
                        <Link className='navbar-link' to='/Create_Quiz'>
                        <li className="navbar-items">Create Quiz</li>
                        </Link>
                        <Link className='navbar-link' to='/teacher_quiz'>
                        <li className="navbar-items">Quiz</li>
                        </Link>
                    </div>
                    <div>

                        {/* <Link className='navbar-link' to='/logout'> */}
                        <li className="navbar-items" onClick={handleLogout}>logout</li>
                        {/* </Link> */}
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
