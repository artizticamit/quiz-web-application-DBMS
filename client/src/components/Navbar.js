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

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <div>
                        <Link className='navbar-link' to='/'>
                        <li className="navbar-items">Home</li>
                        </Link>
                        <Link className='navbar-link' to='/about'>
                        <li className="navbar-items">About</li>
                        </Link>
                    </div>
                    <div>
                        <Link className='navbar-link' to='/login'>
                        <li className="navbar-items" onClick={handleLogin}>Login</li>
                        </Link>
                        <Link className='navbar-link' to='/signup'>
                        <li className="navbar-items">Sign Up</li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
