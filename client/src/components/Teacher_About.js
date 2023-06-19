import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function About() {

  const history = useHistory();

  const location = useLocation();
  const [loginStatus, setLoginStatus] = useState({});
  
  useEffect(()=>{

    Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
        console.log(response.data);
        if(response.data.data == true)
        {
          if(response.data.role_name != "teacher")
          {
          history.push('/error');
          setLoginStatus({message: "You're Not logged In . First login ", status: false});
          }

        }
        else
        {
          history.push('/error');
          setLoginStatus({message: "You're Not logged In . First login ", status: false});
        }

    })
}, []);
    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>About page</h1>
            <div className='about-contents'>

                <p>This is an Online Web Quiz Portal, A platform for conducting online Quiz exam or Practice Mock Test where multiple users can login and give the available exam and get the instant final result </p>

                <p> This application has two level of Users</p>
                    1)  Admin who can conduct any Quiz <br></br>
                    2) Students who can give the Available Quiz <br></br>

                    <p>This application will help the Teachers to conduct a multiple Quiz or a practice Mock Test or Contest with good user-friendly interface in creating questions and it’s option and will have the additional feature of changing the answer and reevaluating the marks for all students.</p>

                    <p>This application will help the students to undertake all the available quizzes and participate in them and get the instant result of the quiz and get the detail of each question like which question student had attempted correctly and which were attempted in correct and which were not attempted with a complete solution given by the administrator.
                </p>
            </div>
        </div>
    )
}

export default About
