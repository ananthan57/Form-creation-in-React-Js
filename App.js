import React from 'react';
import './App.css';
//import React from 'react-to-print';


function App() {
                 
                const handlesubmit=(e)=>{
                  e.preventDefault();
                  const first=e.target.fname.value;
                  const second=e.target.sname.value;
                  const roll=e.target.roll.value;
                  //const Department=e.target.Department.value;
                  const mail=e.target.mail.value;
                  const password=e.target.pass.value;
                  //const SEMESTER=e.target.semester.value;
                  const dob=e.target.birthday.value;
                  const Age=e.target.age.value;
                  const Courses=e.target.course.value;
                  const Language=e.target.lang.value;
                  console.log("First name : "+first,"\n","Last name: "+second,"\n","Roll No: ",+roll,"\n","Mail id: "+mail,"\n","Password:"+password,
                               "\n","DOB: "+dob,"\n","Age: "+Age,"\n","Courses: "+Courses,"\n","Language known: "+Language);
                }



  

  return (
    <div >
      

      <form onSubmit={handlesubmit}>
      <input type="text"name="fname" placeholder="First name"/><br/><br/>
      <input type="text"  name="sname" placeholder="Last name"/><br/><br/>
      <input type="text" name="roll" placeholder="Roll No"/><br/><br/>
      <select name="Department" id="Department"><br/><br/>
    <option value="Department">Department</option>
    <option value="CSBS">CSBS</option>
    <option value="CSE">CSE</option>
    <option value="AIML">AIML</option>
    <option value="AIDS">AIDS</option>
    <option value="AERO">AERO</option>
    <option value="AUTO">AUTO</option>
    <option value="CIVIL">CIVIL</option>
    <option value="MECHANICAL">MECHANICAL</option>
    <option value="MECHATRONICS">MECHATRONICS</option>
    <option value="FT">FT</option>
    <option value="TT"></option>
    {/* <input type="text" placeholder="Mail ID"/>
    <input type="text" placeholder="SEMESTER"/> */}

  
  </select><br/><br/>

      <input type="text" name="mail" placeholder="Mail Id"/><br/><br/>
      <input type="text" name="pass" placeholder="Password"/><br/><br/>
      {/* <input type="text" placeholder="current semester"/> */}
      <select name="Semester" id="Semester"><br/>
      <option value="CURRENT SEMESTER">Current semester</option>
    <option value="I">I</option>
    <option value="II">II</option>
    <option value="III">III</option>
    <option value="IV">IV</option>
    <option value="V">V</option>
    <option value="VI">VI</option>
    <option value="VII">VII</option>
    <option value="VIII">VIII</option>
    </select><br/><br/>
    <input type="date" id="birthday" name="birthday"></input><br/><br/>
    <input type="text" name="age" placeholder="Age"/><br/><br/>
    <input type="text" name="course" placeholder="Courses"/><br/><br/>
      <input type="text"  name="lang" placeholder="Languags known"/><br/><br/>
       <button>Submit</button>
      
      </form>
    </div>
  );

  }
export default App;

 

