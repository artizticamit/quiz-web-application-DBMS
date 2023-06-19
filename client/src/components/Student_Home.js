import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";

function Home() {
    // let data =  axios.get('http://localhost:3000');
    // console.log(data);
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
    return (
        <div className="mainPage">
                <div className='mainPage-text mainPage-text-header'>WELCOME STUDENT</div>
                <div className="mainPage-text">
                    <p>Little study a day make you move toward a success everday, </p> <p>  work hard stay strong and achive all goals you want </p>
                </div>


                <div className="stu-img">

                </div>

        </div>
    )
}

export default Home
