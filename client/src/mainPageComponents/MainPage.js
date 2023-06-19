import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import NavbarMain from './Navbar.main'
import Axios from 'axios'

Axios.defaults.withCredentials = true;
function Main(props) {
    // const [show, setShow] = useState(null);
    // axios.get('http://localhost:3000').then((response)=>{
    //     console.log(response)
    //     setShow(response)
    // }).then((err)=>{
    //     console.log(err);
    //     setShow(err)
    // }).then(()=>{})

    // useEffect(()=>{
    //     Axios.post('http://localhost:8000/data', {name:"amit"})
    // .then(response=>{
    //     console.log(response.data);
    // })}, [])

    const history = useHistory();

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post("http://localhost:8000/checkStatus", {
          name: "Amit",
        }).then((response) => {
          if (response.data.data === false) {
            history.push({
              pathname: "/login",
            });
          }
          else{
              console.log("username = " +response.data.username);
              setName(response.data.username);
            //   history.push('/main');
          }
        });
      }, []);



    return (
        <>   
            <NavbarMain/>
            <div className="container">
                <h1 className='h1-primary text-center'>Welcome {name} </h1>
                <p></p>
            </div>
            
        </>
    )
}

export default Main;
