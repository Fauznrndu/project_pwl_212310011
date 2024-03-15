import React from 'react';
import './App.css';

function App() {

  function display(){  
    var studentnumber = document.getElementById("npm").value;
    var firstname = document.getElementById("firstname").value;
    var middlename = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput); 
    var month_diff = Date.now() - dob.getTime(); 
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);

    if(studentnumber.match(/^\d+/) && firstname !=='' && lastname !=='' && age !=='' && userinput !=='' ){
      var sn = studentnumber
      var fn = firstname
      var md = middlename
      var ln = lastname
      alert("NPM : " + sn + "\nFullname : " + fn +" "+ md +" " + ln  + "\nage : " + age + "th")
    }else{
      alert ("Incomplete data")
    }
}  

  return (
    <div class="container">
       <h5 class="mt-3">Registration</h5>
      <form name="form"  autoComplete='off'>
      <div class="row mt-3">
          <label for="npm" class="col-sm-2 col-form-label">NPM</label>
          <div class="col-sm-6">
            <input type="text"  name="npm" id="npm" class="form-control rounded-0" maxLength="10" inputMode='numeric' required autoFocus pattern="^([1-9])[0-9]{8,9}$"/>
          </div>
        </div> 
        <div class="row mt-3">
          <label for="firstname" class="col-sm-2 col-form-label">First name</label>
          <div class="col-sm-6">
            <input type="text" name="firstname" id="firstname" class="form-control  rounded-0" required  />
          </div>
        </div> 
        <div class="row mt-3">
          <label for="middlename" class="col-sm-2 col-form-label">Middle name</label>
          <div class="col-sm-6">
            <input type="text"  name="middlename" class="form-control rounded-0" id="middlename"/>
          </div>
        </div> 
        <div class="row mt-3">
          <label for="lastname" class="col-sm-2 col-form-label">Last name</label>
          <div class="col-sm-6">
            <input type="text" name="lastname" class="form-control  rounded-0" id="lastname" required/>
          </div>
        </div> 
        <div class="row mt-3">
          <label for="age" class="col-sm-2 col-form-label">Birth date</label>
          <div class="col-sm-6">
            <input type="date" class="form-control  rounded-0" id="DOB" required/>
          </div>
        </div>
        <button type="submit" class="btn btn-outline-dark mt-3 rounded-0 me-2" onClick={display}>Input</button>
        <button type="reset" class="btn btn-outline-dark mt-3 rounded-0">Reset</button>
      </form> 
    </div>
  );
}

export default App;
