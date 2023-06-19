import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Student_Quiz() {
    const history = useHistory();
    const [quizlist, setquizlist] = useState([]);
const location = useLocation();
const [loginStatus, setLoginStatus] = useState({});
    useEffect(()=>{

      Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
          console.log(response.data);
          if(response.data.data == true)
          {
            if(response.data.role_name != "student")
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

    useEffect(() => {
        Axios.get('http://localhost:8000/api/get_quiz').then((response) => {
            console.log(response.data);
            setquizlist(response.data)
        });
    }, []);

    function sendqueid(name) {


      Axios.post('http://localhost:8000/api/post_quiz_given',{
        role_id:"stu-user123",
        quiz_id:name,
      }).then((response)=>{
        history.push({
            pathname: "/Student_Que",
            state: {
                quiz_id: name,
                number: 0
            }
        })

        });
    }

    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>Quiz Available</h1>
            <div className='quiz_content'>

                {quizlist.map((val) => {
                    return <div className='quiz_list'><h1> Quiz Name : {val.quiz_name} </h1> <p> Quiz Description : {val.quiz_descript}</p>
                        <button className='login-submit-btn' onClick={() => sendqueid(val.quiz_id)}>Open</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Student_Quiz
