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
    const [que_id, setqueid] = useState(location.state.que_id);
    const [que_dis, setquedis] = useState(location.state.que_dis);
    const [option1_id, setoption1id] = useState(location.state.option1_id);
    const [option2_id, setoption2id] = useState(location.state.option2_id);
    const [option3_id, setoption3id] = useState(location.state.option3_id);
    const [option4_id, setoption4id] = useState(location.state.option4_id);

    const [option1_dis, setoption1dis] = useState(location.state.option1_dis);
    const [option1_ans, setoption1ans] = useState(0);

    const [option2_dis, setoption2dis] = useState(location.state.option2_dis);
    const [option2_ans, setoption2ans] = useState(0);

    const [option3_dis, setoption3dis] = useState(location.state.option3_dis);
    const [option3_ans, setoption3ans] = useState(0);

    const [option4_dis, setoption4dis] = useState(location.state.option4_dis);
    const [option4_ans, setoption4ans] = useState(0);




    Axios.defaults.withCredentials = true;

      const  submitButton = () =>{
        Axios.post('http://localhost:8000/api/post_edit_que',{
           quizid:quiz_id,
           queid:que_id,
           quedis:que_dis,
           option1id:option1_id,
           option1dis:option1_dis,
           option1ans:option1_ans,
           option2id:option2_id,
           option2dis:option2_dis,
           option2ans:option2_ans,
           option3id:option3_id,
           option3dis:option3_dis,
           option3ans:option3_ans,
           option4id:option4_id,
           option4dis:option4_dis,
           option4ans:option4_ans,
         }).then((response)=>{
        // alert("inserted successfully");
        alert(response.data);
        history.push({
          pathname: "/Teacher_Que",
          state: {quiz_id: response.data}
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
                            Edit Que
                        </div>
                        <div className="dark-side">

                        </div>
                    </div>




                            <div className="form-body">


                            <input type="text" name="Que_dis" id="user-name" onChange={(e) =>{ setquedis(e.target.value)}} placeholder="Que Description" value={que_dis} />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(1);setoption2ans(0);setoption3ans(0);setoption4ans(0)}} />
                            <input type="text" name="Option1_dis" id="user-name" onChange={(e) =>{ setoption1dis(e.target.value)}} placeholder="Option 1 Description" value={option1_dis} />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(1);setoption3ans(0);setoption4ans(0)}} />
                            <input type="text" name="Option2_dis" id="user-name" onChange={(e) =>{ setoption2dis(e.target.value)}} placeholder="Option 2 Description" value={option2_dis} />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(0);setoption3ans(1);setoption4ans(0)}} />
                            <input type="text" name="Option3_dis" id="user-name" onChange={(e) =>{ setoption3dis(e.target.value)}} placeholder="Option 3 Description" value={option3_dis} />

                            <input type="radio" name="optionans" onChange={(e) =>{ setoption1ans(0);setoption2ans(0);setoption3ans(0);setoption4ans(1)}} />
                            <input type="text" name="Option4_dis" id="user-name" onChange={(e) =>{ setoption4dis(e.target.value)}} placeholder="Option 4 Description" value={option4_dis} />

                            {/* <input type="button" value="Login" /> */}

                            <button className='login-submit-btn' onClick={submitButton}>DONE</button>

                            </div>


                </div>
            </div>

        </div>
    )
}

export default Create_Que
