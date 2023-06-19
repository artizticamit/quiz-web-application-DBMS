import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Student_Quiz() {
const [quelist, setquelist] = useState([]);
const [oplist, setoplist] = useState([]);
const [attemptlist, setattemptlist] = useState([]);
const history = useHistory();

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


    useEffect(()=>{
    Axios.post('http://localhost:8000/api/get_myque',{
      quiz_id:location.state.quiz_id
    }).then((response)=>{
            console.log(response.data);
            setquelist(response.data);

    });

    Axios.post('http://localhost:8000/api/get_myoption',{
      quiz_id:location.state.quiz_id
    }).then((response)=>{
            console.log("option-",response.data);
            setoplist(response.data);
    });

    Axios.post('http://localhost:8000/api/get_attempt_detail',{
      quiz_id:location.state.quiz_id
    }).then((response)=>{
            console.log("option-attempt",response.data);
            setattemptlist(response.data);
    });

}, []);










    return (
        <div className='contianer'>
        <h1 className='about-header-h1'>Quiz_ID :- {location.state.quiz_id}</h1>
            <h1 className='about-header-h1'>All Question Answers with your Attempt detail</h1>
            <div className='quiz_content'>

                {quelist.map((val,index)=>{
                  return <div className='que_list' > <h3> Que {index+1}) {val.que_descript} </h3>

                  {oplist.slice(index*4,index*4+4).map((val,ind)=>{
                    return <div>
                     <h4> {ind+1}) {val.option_descript} Ans- {val.answer} </h4>
                     </div>

                  })}
                  {attemptlist.slice(index,index+1).map((val,ind)=>{
                    return <div>
                     <h4> Your attemp was {val.option_descript} it's attempt detail is : {val.attempt_detail} </h4>
                     </div>

                  })}

                   </div>

                })}
            </div>


        </div>
    )
}

export default Student_Quiz
