import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";


function Create_Quiz() {
    const [quiz_name, setquizname] = useState('');
const [quiz_dis, setquizdis] = useState('');
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
    Axios.defaults.withCredentials = true;

      const  submitButton = () =>{
        Axios.post('http://localhost:8000/api/post_quiz',{
           quizname:quiz_name,
           quizdis:quiz_dis,
         }).then((response)=>{
        // alert("inserted successfully");
        alert("done");
        // response.render("/Create_Que");
        history.push({
          pathname: "/Create_Que",
          state: {quiz_id: response.data.id}
        })

      });
    };


    // useEffect(()=>{
    //     Axios.post('http://localhost:8000/api/post_quiz', {name: "Amit"}).then((response)=>{
    //             console.log(response.data);
    //             if(response.data.data === true)
    //             {
    //
    //                 history.push('/main');
    //                 setLoginStatus({message: "You're Logged in", status: true});
    //                 setMessage(loginStatus.message);
    //
    //             }
    //             else{
    //                 // history.push('/login');
    //                 setLoginStatus({message: "You're Not logged In . First login ", status: false});
    //                 setMessage(loginStatus.message);
    //             }
    //     })
    // }, [])


    return (
        <div className="login-page bg-image">
            <div id="bg">
            </div>
            <div className="page-container">
                <div className="login-container">
                    <div className="form-header">

                        <div className="login-txt">
                            Creat Quiz
                        </div>
                        <div className="dark-side">

                        </div>
                    </div>




                            <div className="form-body">

                            <input type="text" name="Quiz_name" id="user-name" onChange={(e) =>{ setquizname(e.target.value)}} placeholder="Quiz Name" />

                            <input type="text" name="Quiz_description" id="pwd" onChange={(e) =>{ setquizdis(e.target.value)}} placeholder="Describe your Quiz" />

                            {/* <input type="button" value="Login" /> */}


                            <button className='login-submit-btn' onClick={submitButton}>Next</button>

                            </div>


                </div>
            </div>

        </div>
    )
}

export default Create_Quiz
