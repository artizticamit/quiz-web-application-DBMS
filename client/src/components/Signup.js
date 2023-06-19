import React,{useState} from 'react';
import Axios from 'axios';

function Signup() {

    const [username, setUsername] = useState('');


    const register = ()=>{

        Axios.post('http://localhost:8000/sendingUsername', {
            username: username
        }).then(response=>{
            console.log(response);
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
                            Sign Up
                        </div> 
                        <div className="dark-side">
        
                        </div>  
                    </div>
        
                
                        <form action="/signup" method='post'>
                            <div className="form-body">
                            
                            <input type="text" name="username" id="user-name" onChange={(e)=>{setUsername(e.target.value)}} placeholder="User name" />
                            <input type="password" name="password" id="pwd" placeholder="Password" />
                            <a className="forg-pwd" href="/login">Already have an Account?</a>
                            
                            <button className='login-submit-btn' type='submit' onClick={register}>Signup</button>
                            </div>
                        </form>
        
                </div>
            </div>
            
        </div>
    )
}

export default Signup;
