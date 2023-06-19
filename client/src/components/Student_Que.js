import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Create_Que() {
  const history = useHistory();
const [quelist, setquelist] = useState([]);
const [oplist, setoplist] = useState([]);
  const location = useLocation();
  const [queitem, setqueitem] = useState('hello world');
  const [attemptid, setattemptid] = useState('');
  const [curqueid, setcurqueid] = useState('');
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
  console.log(location.state.quiz_id);
var num = location.state.number;
  Axios.defaults.withCredentials = true;



  useEffect(()=>{
      Axios.post('http://localhost:8000/api/get_que',{
        quiz_id:location.state.quiz_id
      }).then((response)=>{
              console.log(response.data);
              setquelist(response.data);

      });

      Axios.post('http://localhost:8000/api/get_option',{
        quiz_id:location.state.quiz_id
      }).then((response)=>{
              console.log("option-",response.data);
              setoplist(response.data);
      });
  }, []);


    // function SendQueid(name){
    //   useEffect(()=>{
    //
    //
    // }, []);

     // }



     function NextQue() {
      // useEffect(()=>{
       Axios.post('http://localhost:8000/api/post_attempt',{
         role_id:"stu-user123",
         quiz_id:location.state.quiz_id,
         que_id:curqueid,
         attempt_id:attemptid,
       }).then((response)=>{
         history.push({
           pathname: "/Student_Que",
           state: {
                   quiz_id: location.state.quiz_id,
                   number:location.state.number + 1
                   }
         })
       });

     // },[]);
      }


      function SubmitQuiz() {

        Axios.post('http://localhost:8000/api/post_attempt_submit',{
          role_id:"stu-user123",
          quiz_id:location.state.quiz_id,
          que_id:curqueid,
          attempt_id:attemptid,
        }).then((response)=>{
          history.push({
            pathname: "/Student_Score"
          })
        });

       }







    return(
        <div className="login-page bg-image">
            <div id="bg">
            </div>
            <div className="page-container">
                <div className="login-container">
                    <div className="form-header">

                        <div className="login-txt">
                            QUESTION
                        </div>
                        <div className="dark-side">

                        </div>
                    </div>


                    {quelist.slice(num,num+1).map((val)=>{

                      return <div className='quiz_list'> <h1> Que{num+1}: {val.que_descript}  </h1>
                       </div>
                    })}

                    {oplist.slice(num*4,num*4+4).map((val,index)=>{
                      return <div>
                        <input type="radio" name="optionans" onChange={(e) =>{ setattemptid(val.option_id);setcurqueid(quelist[num].que_id)}} />
                       <h1 style={{display:"inline-block",margin:"0 0 10px 15px"}}> {index+1}) {val.option_descript}  </h1>
                       </div>

                    })}


                      { quelist.length > num+1 &&
                        <button className='login-submit-btn' onClick={() => NextQue()}>Next</button>
                      }

                      <button className='login-submit-btn' onClick={() => SubmitQuiz()}>Submit</button>




                </div>
            </div>

        </div>
    )
}

export default Create_Que
