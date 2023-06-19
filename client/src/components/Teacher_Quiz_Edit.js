import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Create_Quiz() {


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
    const [quiz_id, setquizid] = useState(location.state.quiz_id);
    const [quiz_name, setquizname] = useState(location.state.quiz_name);
const [quiz_dis, setquizdis] = useState(location.state.quiz_dis);

    Axios.defaults.withCredentials = true;

      function submitButton() {
        Axios.post('http://localhost:8000/api/post_edit_quiz',{
           quizid:quiz_id,
           quizname:quiz_name,
           quizdis:quiz_dis,
         }).then((response)=>{
        // alert("inserted successfully");
        alert(response.data);
        // response.render("/Create_Que");
        history.push({
          pathname: "/Teacher_Quiz",
          state: {quiz_id: quiz_id}
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
                            Edit Quiz
                        </div>
                        <div className="dark-side">

                        </div>
                    </div>




                            <div className="form-body">

                            <input type="text" name="Quiz_name" id="user-name" onChange={(e) =>{ setquizname(e.target.value)}} placeholder="Quiz Name" value={quiz_name}/>

                            <input type="text" name="Quiz_description" id="pwd" onChange={(e) =>{ setquizdis(e.target.value)}} placeholder="Describe your Quiz" value={quiz_dis} />

                            {/* <input type="button" value="Login" /> */}


                            <button className='login-submit-btn' onClick={() => submitButton()}>Done</button>

                            </div>


                </div>
            </div>

        </div>
    )
}

export default Create_Quiz
