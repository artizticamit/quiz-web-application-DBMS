import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function About() {

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
const [scorelist, setscorelist] = useState([]);
  useEffect(()=>{
      Axios.post('http://localhost:8000/api/get_myscore', {
      quiz_id: location.state.quiz_id
  }).then((response)=>{
              console.log(response.data);
              setscorelist(response.data)
      });
  }, []);


    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>SCORECARD</h1>
            <div className='about-contents'>

            <center>
            <table class="tamble">

              <thead>
                <th> Sr.No.</th>
                <th> STUDENT_ID</th>
                <th> QUIZ_ID</th>
                <th> QUIZ</th>
                <th>MARK OBTAIN</th>
                <th>TOTAL</th>
                <th>PERCENTAGE</th>

              </thead>

            <tbody>

            {
              scorelist.map((val,i)=>{

            return  <tr>
              <td> {i+1} </td>
              <td> {val.role_id}</td>
              <td> {val.quiz_id}</td>
              <td> {val.quiz_name}</td>
              <td>{val.marks}</td>
              <td>{val.total}</td>
              <td>{(val.marks*100)/val.total}%</td>

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
