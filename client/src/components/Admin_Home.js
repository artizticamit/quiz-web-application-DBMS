import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Home() {
    // let data =  axios.get('http://localhost:3000');
    // console.log(data);
    const history = useHistory();

    const location = useLocation();


//     useEffect(()=>{
//
//       Axios.post('http://localhost:3000/checkStatus', {name: "Amit"}).then((response)=>{
//           console.log(response.data);
//           if(response.data.data == true)
//           {
//             if(response.data.role_name != "teacher")
//             {
//             history.push('/error');
//             setLoginStatus({message: "You're Not logged In . First login ", status: false});
//             }
//
//           }
//           else
//           {
//             history.push('/error');
//             setLoginStatus({message: "You're Not logged In . First login ", status: false});
//           }
//
//       })
// }, []);
//



    return (
        <div className="mainPage">
                <div className='mainPage-text mainPage-text-header'>WELCOME ADMINISTRATOR</div>
                <div className="mainPage-text">
                    <p>Go the Teacher navbar too view all the teachers, </p> <p> Go to Student navbar to view all the students.  </p>
                </div>


                <div className="tea-img">

                </div>

        </div>
    )
}

export default Home
