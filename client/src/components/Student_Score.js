import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function About() {
const [scorelist, setscorelist] = useState([]);
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
      Axios.get('http://localhost:8000/api/get_score').then((response)=>{
              console.log(response.data);
              setscorelist(response.data)
      });
  }, []);


  function sendqueid_score(name) {
    history.push({
      pathname: "/Student_Quiz_Attempt_Detail",
      state: {quiz_id: name}
    })
   }

    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>SCORECARD</h1>
            <div className='about-contents'>

            <center>
            <table class="tamble">

              <thead>
                <th> Sr.No.</th>
                <th> QUIZ</th>
                <th>MARK OBTAIN</th>
                <th>TOTAL</th>
                <th>PERCENTAGE</th>
                <th>VIEW QUIZ</th>
              </thead>

            <tbody>

            {
              scorelist.map((val,i)=>{

            return  <tr>
              <td> {i+1} </td>
              <td> {val.quiz_id}</td>
              <td>{val.marks}</td>
              <td>{val.total}</td>
              <td>{(val.marks*100)/val.total}%</td>
              <td><button className='login-submit-btn' onClick={() => sendqueid_score(val.quiz_id)}>VIEW</button></td>
              </tr>

              })}

            </tbody>


            </table>
            </center>
            </div>

        </div>
    )
}

export default About
