import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Create_Que() {
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
  console.log(location.state.quiz_id);
  const [quiz_id, setquizid] = useState(location.state.quiz_id);

    const [que_dis, setquedis] = useState('');


    const [option1_dis, setoption1dis] = useState('');
    const [option1_ans, setoption1ans] = useState(0);

    const [option2_dis, setoption2dis] = useState('');
    const [option2_ans, setoption2ans] = useState(0);

    const [option3_dis, setoption3dis] = useState('');
    const [option3_ans, setoption3ans] = useState(0);

    const [option4_dis, setoption4dis] = useState('');
    const [option4_ans, setoption4ans] = useState(0);




    Axios.defaults.withCredentials = true;

      const  submitButton = () =>{
        Axios.post('http://localhost:8000/api/post_que',{
           quizid:quiz_id,
           quedis:que_dis,
           option1dis:option1_dis,
           option1ans:option1_ans,
           option2dis:option2_dis,
           option2ans:option2_ans,
           option3dis:option3_dis,
           option3ans:option3_ans,
           option4dis:option4_dis,
           option4ans:option4_ans,
         }).then((response)=>{
        alert("inserted successfully please refresh the page");
        // alert(response.data);
        history.push({
          pathname: "/Create_Que",
          state: {quiz_id: quiz_id}
        })

      });
    };

    const  submitButtonDone = () =>{
      Axios.post('http://localhost:8000/api/post_que',{
         quizid:quiz_id,
         quedis:que_dis,
         option1dis:option1_dis,
         option1ans:option1_ans,
         option2dis:option2_dis,
         option2ans:option2_ans,
         option3dis:option3_dis,
         option3ans:option3_ans,
         option4dis:option4_dis,
         option4ans:option4_ans,
       }).then((response)=>{
      // alert("inserted successfully");
      alert(response.data);

      history.push({
        pathname: "/Teacher_Quiz"
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
                <div className="login-container" style={ {width:"700px",height:"650px"}}>
                    <div className="form-header">

                        <div className="login-txt">
                            Creat Que
                        </div>
                        <div className="dark-side">

                        </div>
                    </div>




                            <div className="form-body" style={ {padding:"10px 40px 0px 40px"}}>


                            <input type="text" name="Que_dis" id="user-name" onChange={(e) =>{ setquedis(e.target.value)}} placeholder="Que Description" />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(1);setoption2ans(0);setoption3ans(0);setoption4ans(0)}}  />
                            <input type="text" name="Option1_dis" id="user-name" onChange={(e) =>{ setoption1dis(e.target.value)}} placeholder="Option 1 Description" />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(1);setoption3ans(0);setoption4ans(0)} }  />
                            <input type="text" name="Option2_dis" id="user-name" onChange={(e) =>{ setoption2dis(e.target.value)}} placeholder="Option 2 Description" />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(0);setoption3ans(1);setoption4ans(0)}}  />
                            <input type="text" name="Option3_dis" id="user-name" onChange={(e) =>{ setoption3dis(e.target.value)}} placeholder="Option 3 Description" />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(0);setoption3ans(0);setoption4ans(1)}}  />
                            <input type="text" name="Option4_dis" id="user-name" onChange={(e) =>{ setoption4dis(e.target.value)}} placeholder="Option 4 Description" />

                            {/* <input type="button" value="Login" /> */}

                            <button className='login-submit-btn' onClick={submitButton}>ADD</button>
                            <button className='login-submit-btn' onClick={submitButtonDone}>DONE</button>
                            </div>


                </div>
            </div>

        </div>
    )
}

export default Create_Que
