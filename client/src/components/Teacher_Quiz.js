import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Student_Quiz() {
const [quizlist, setquizlist] = useState([]);
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
useEffect(()=>{
    Axios.post('http://localhost:8000/api/get_myquiz', {
    role_id: "tea-user321"
}).then((response)=>{
            console.log(response.data);
            setquizlist(response.data)
    });
}, []);


function sendqueid(name) {
  history.push({
    pathname: "/Teacher_Que",
    state: {quiz_id: name.toString()}
  })
 }
 function sendqueid_del(names) {
   Axios.post('http://localhost:8000/api/post_quiz_delete',{
      quiz_id:names,
    }).then((response)=>{
   alert(response.data);
   history.push("/Teacher_Quiz");

 });
  }

  function sendquizid(name) {
    history.push({
      pathname: "/Teacher_Quiz_Edit",
      state: {
        quiz_id:quizlist[name].quiz_id,
        quiz_name:quizlist[name].quiz_name,
        quiz_dis:quizlist[name].quiz_descript
      }
    })
   }

   function sendqueid_score(name) {
     history.push({
       pathname: "/Teacher_Score",
       state: {quiz_id: name.toString()}
     })
    }

    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>Quiz Created</h1>
            <div className='quiz_content'>

                {quizlist.map((val,index)=>{
                  return <div className='quiz_list'><h1> Quiz Name : {val.quiz_name} </h1> <p> Quiz Description : {val.quiz_descript}</p>
                    <button className='login-submit-btn' onClick={() => sendqueid(val.quiz_id)}>Open</button>
                    <button className='login-submit-btn' onClick={() => sendqueid_score(val.quiz_id)}>Score</button>
                    <button className='login-submit-btn' onClick={() => sendquizid(index)}>Edit</button>
                      <button className='login-submit-btn' onClick={() => sendqueid_del(val.quiz_id)}>Remove</button>
                   </div>

                })}
            </div>
        </div>
    )
}

export default Student_Quiz
