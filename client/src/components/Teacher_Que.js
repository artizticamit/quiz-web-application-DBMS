import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Student_Quiz() {
const [quelist, setquelist] = useState([]);
const [oplist, setoplist] = useState([]);
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
}, []);

function sendqueid(name) {
  history.push({
    pathname: "/Teacher_Que_Edit",
    state: {
      quiz_id:location.state.quiz_id,
      que_id: quelist[name].que_id,
      que_dis:quelist[name].que_descript,
      option1_id: oplist[name*4].option_id,
      option1_dis:oplist[name*4].option_descript,

      option2_id:oplist[name*4+1].option_id,
      option2_dis:oplist[name*4+1].option_descript,

      option3_id:oplist[name*4+2].option_id,
      option3_dis:oplist[name*4+2].option_descript,

      option4_id:oplist[name*4+3].option_id,
      option4_dis:oplist[name*4+3].option_descript

    }
  })
 }

 function sendqueid_del(name) {
   Axios.post('http://localhost:8000/api/post_que_delete',{
      que_id:quelist[name].que_id,
    }).then((response)=>{
   alert(response.data);
   history.push({
     pathname: "/Teacher_Que",
     state: {quiz_id:location.state.quiz_id }
   })

 });
  }


function addque() {

  history.push({
    pathname: "/Create_Que",
    state: {quiz_id: location.state.quiz_id }
  })
}


function reEvaluate() {

  Axios.post('http://localhost:8000/api/post_re_evaluate',{
     quiz_id:location.state.quiz_id
   }).then((response)=>{
  alert(response.data);
  history.push({
    pathname: "/Teacher_Que",
    state: {quiz_id:location.state.quiz_id }
  })

});
}

    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>Question Created</h1>
            <center>
            <button className='login-submit-btn' onClick={() => reEvaluate()}>Re-evaluate Quiz</button>
            </center>
            <div className='quiz_content'>

                {quelist.map((val,index)=>{
                  return <div className='que_list' > <h3> Que {index+1}) {val.que_descript} </h3>

                  {oplist.slice(index*4,index*4+4).map((val,ind)=>{
                    return <div>
                     <h4> {ind+1}) {val.option_descript} Ans- {val.answer} </h4>
                     </div>

                  })}
                  <center>
                    <button className='login-submit-btn' onClick={() => sendqueid(index)}>Edit</button>
                    <button className='login-submit-btn' onClick={() => sendqueid_del(index)}>Remove</button>
                    </center>
                   </div>

                })}
            </div>
              <center>
              <button className='login-submit-btn' onClick={() => addque()}>Add Que</button>
              </center>

        </div>
    )
}

export default Student_Quiz
