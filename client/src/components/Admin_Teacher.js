import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Student_Quiz() {
const [teacherlist, setteacherlist] = useState([]);
const history = useHistory();

const location = useLocation();

// useEffect(()=>{
//
//   Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
//       console.log(response.data);
//       if(response.data.data == true)
//       {
//         if(response.data.role_name != "teacher")
//         {
//         history.push('/error');
//         setLoginStatus({message: "You're Not logged In . First login ", status: false});
//         }
//
//       }
//       else
//       {
//         history.push('/error');
//         setLoginStatus({message: "You're Not logged In . First login ", status: false});
//       }
//
//   })
// }, []);

    useEffect(()=>{
    Axios.post('http://localhost:8000/api/get_all_user',{
      role_name:"teacher"
    }).then((response)=>{
            console.log(response.data);
            setteacherlist(response.data);
    });

}, []);



 function sendqueid_del(name) {
   Axios.post('http://localhost:8000/api/post_user_delete',{
      username:name,
    }).then((response)=>{
   alert("Done!!! refresh page");
   history.push({
     pathname: "/Admin_Teacher"
   })

 });
  }







    return (
        <div className='contianer'>
            <h1 className='about-header-h1'>All Teachers</h1>
            <div className='quiz_content'>

            {teacherlist.map((val,index)=>{
              return <div className='que_list' > <h3>{index+1}) Name : {val.name} </h3>
              <h3> Username : {val.username} </h3>
              <h3> Role ID : {val.role_id} </h3>
              <h3> Role Name : {val.role_name} </h3>

              <center>
                <button className='login-submit-btn' onClick={() => sendqueid_del(val.username)}>Remove</button>
                </center>
               </div>

            })}

            </div>
            </div>

    )
}

export default Student_Quiz
