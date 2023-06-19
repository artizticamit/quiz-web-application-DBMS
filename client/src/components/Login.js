import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from "axios";

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [roleID, setRoleID] = useState('');
    
    

    

    Axios.defaults.withCredentials = true;

    
    // const handleLoginUsername = (event)=>{
    //     setUsername(event.target.value);
    // }

    useEffect(()=>{
        Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
                console.log(response.data);
                if(response.data.data === true)
                {
                   
                    
                }
                else{
                    
                //    history.push('/login')
                }
        })
    }, [])

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        // console.log("login page")
        Axios.post('http://localhost:8000/login', {username: username, password: password}).then((response)=>{
            // console.log(response.data);
            const role_id = response.data.role_id;
            setRoleID(response.data.role_id);

            if(response.data.role_name == 'Teacher' || response.data.role_name == 'teacher'){
                history.push('/teacher_home', {role_id: role_id})
            }else{
                history.push('/student_home', {role_id: role_id})
            }
        }).catch(err=>{
            console.log(err);
        })
        
    }
    

    

    return (
        <div className="login-page bg-image">
            <div id="bg">
            
            </div>
            <div className="page-container">
                <div className="login-container">
                    <div className="form-header">
                        
                        <div className="login-txt">
                            Log in
                        </div> 
                        <div className="dark-side">
        
                        </div>  
                    </div>
        
                
                        <form >
                            <div className="form-body">
                                
                            <input type="text" name="username" id="user-name" onChange={(e)=>{setUsername(e.target.value)}} placeholder="User name" />
                            <input type="password" name="password" id="pwd" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                            <a className="forg-pwd" href='/signup'>Create new account</a>
                            {/* <input type="button" value="Login" /> */}

                            <button className='login-submit-btn' onClick={handleLoginSubmit}>Login</button>
                            </div>
                        </form>
        
                </div>
            </div>
            
        </div>
    )
}

export default Login
