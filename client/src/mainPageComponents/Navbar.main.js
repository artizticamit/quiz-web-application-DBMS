import React from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

function NavbarMain(props) {

    const history = useHistory();

    const handleLogout = ()=>{
        Axios.post('http://localhost:8000/logout').then(response=>{
            console.log(response);
            alert(response.data + " Succesfully Logged out");
            history.push({
                pathname: '/login'
            });
        })
    }
    return (
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/main">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/main">About</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                        </li> */}
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {props.role}
                        </a>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/main">Take Quiz</a></li>
                            <li><a className="dropdown-item" href="/main">Score</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul> */}
                        </li>
                        <li className="nav-item right">
                        <a className="nav-link active" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                   
                    </div>
                </div>
            </nav>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        </div>
    )
}

export default NavbarMain;
