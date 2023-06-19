import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Role from "./components/Role";
import Main from "./mainPageComponents/MainPage";
import Error from "./components/Error";
import StudentPage from "./mainPageComponents/StudentPage";
import Teacher from "./mainPageComponents/Teacher"
import Test from "./Test"
import NotLogin from "./Auth_login/NotLogin";

/************************** */
import Navbar_Student from "./components/Navbar_Student";
import Navbar_Teacher from "./components/Navbar_Teacher";

import Student_About from "./components/Student_About";
import Teacher_About from "./components/Teacher_About";
import Student_Score from "./components/Student_Score";
import Create_Quiz from "./components/Create_Quiz";
import Create_Que from "./components/Create_Que";
import Student_Quiz from "./components/Student_Quiz";

import Student_Home from "./components/Student_Home";
import Teacher_Home from "./components/Teacher_Home";

/************************* */
import Student_Que from "./components/Student_Que";
import Teacher_Que from "./components/Teacher_Que";
import Teacher_Que_Edit from "./components/Teacher_Que_Edit";
import Teacher_Quiz from "./components/Teacher_Quiz";

import Teacher_Quiz_Edit from "./components/Teacher_Quiz_Edit";
import Teacher_Score from "./components/Teacher_Score";
import Student_Quiz_Attempt_Detail from "./components/Student_Quiz_Attempt_Detail";





import Navbar_Admin from "./components/Navbar_Admin";
import Admin_Home from "./components/Admin_Home";
import Admin_Teacher from "./components/Admin_Teacher";
import Admin_Student from "./components/Admin_Student";



function App() {

  // const [userName]

  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path='/'>
          <Navbar/>
            <Home/>
          </Route>
          <Route exact path='/about'>
          <Navbar/>
            <About/>
          </Route>
          <Route exact path='/login'>
          <Navbar/>
            <Login/>
          </Route>
          <Route exact path='/signup'>
          <Navbar/>
            <Signup/>
          </Route>
          <Route exact path='/role'>
            <Role/>
          </Route>
          <Route exact path='/main'>
            <Main />
          </Route>
          <Route exact path='/error'>
            <Error />
          </Route>





          <Route exact path='/main/student'>
            <StudentPage/>
          </Route>
          <Route exact path='/main/teacher'>
            <Teacher />
          </Route>
          <Route exact path='/test'>
            <Test/>
          </Route>
          <Route exact path='/notlogin'>
            <NotLogin/>
          </Route>
          {/* <Route exact path='/student'>

          </Route> */}


          <Route exact path='/student_about'>
            <Navbar_Student/>
            <Student_About/>
          </Route>
          <Route exact path='/teacher_about'>
            <Navbar_Teacher/>
            <Teacher_About/>
          </Route>
          <Route exact path='/student_quiz'>
            <Navbar_Student/>
            <Student_Quiz/>
          </Route>
          <Route exact path='/student_score'>
            <Navbar_Student/>
            <Student_Score/>
          </Route>
          <Route exact path='/create_quiz'>

            <Create_Quiz/>
          </Route>
          <Route exact path='/create_que'>

            <Create_Que/>
          </Route>


          <Route exact path='/student_home'>
          <Navbar_Student/>
            <Student_Home/>
          </Route>
          <Route exact path='/teacher_home'>
           <Navbar_Teacher/>
            <Teacher_Home/>
          </Route>


          <Route exact path='/student_que'>
            <Student_Que/>
          </Route>
          <Route exact path='/teacher_que'>
            <Navbar_Teacher/>
            <Teacher_Que/>
          </Route>
          <Route exact path='/teacher_que_edit'>
            <Teacher_Que_Edit/>
          </Route>

          <Route exact path='/teacher_quiz'>
           <Navbar_Teacher/>
            <Teacher_Quiz/>
          </Route>
          <Route exact path='/teacher_quiz_edit'>
            <Teacher_Quiz_Edit/>
          </Route>
          <Route exact path='/teacher_score'>
           <Navbar_Teacher/>
            <Teacher_Score/>
          </Route>
          <Route exact path='/student_quiz_attempt_detail'>
           <Navbar_Student/>
            <Student_Quiz_Attempt_Detail/>
          </Route>

          <Route exact path='/admin_home'>
           <Navbar_Admin/>
            <Admin_Home/>
          </Route>
          <Route exact path='/admin_teacher'>
           <Navbar_Admin/>
            <Admin_Teacher/>
          </Route>
          <Route exact path='/admin_student'>
           <Navbar_Admin/>
            <Admin_Student/>
          </Route>

        </Switch>
    </Router>
    </div>
  );
}

export default App;
