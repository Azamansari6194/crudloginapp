import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Loginform = () => {

  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")

  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault();


    if (loginEmail === "") {
      alert("enter name")

    }
    else if (/\d/.test(loginEmail)) {
      alert("User name cannot have number")
    }

    else if (loginPassword === "") {
      alert("password cannot be empty")
    }

    else {
//new code//
let localdata=JSON.parse(localStorage.getItem("user_login"))
console.log(localdata);
let {Email,Password}=localdata;
console.log("email",Email,Password);
if(Email!==loginEmail)
{
  alert("invalid email")
}

else if(Password!==loginPassword){
  alert("incorrect password")
}

else{
  alert("Login Successful")
navigate("/Dataform")
}
      //main 
      // console.log("all login details correct")
      // alert("login successful")
      console.log("login successful")
      // fetch(`http://localhost:3030/posts`).then((response) => {
      //   return response.json();
      // }).then((response) => {
      //   console.log("response data ", response)
      //   let val = Object.values(response)
      //   let len = val.length - 1;
      //   let Namefetch = val[len].Name;
      //   let Passwordfetch = val[len].Password
      //   console.log("values and password are ", val[len].Name, val[len].Password)

        
      //   if (Namefetch !== loginName) {
      //     console.log("incorrect name")
        
      //   }

      //   else if (Passwordfetch !== loginPassword) {
      //     console.log("incorrect password")
      //     alert("incorrect password")
      //   }

      //   else{
      //     navigate("/Dataform")

      //   }

        // alert("login successful")
      // }).catch((error) => {
      //   console.log("error msg ", error)
      // })


    }
   
  }



  return (
    <>
      <div>
        {/* <h2>this is login</h2> */}
        <div>
          {/* <h2>this is register page</h2> */}
          <div className='offset-lg-3 col-lg-6'>
            <form className='container' >
              <div className='card'>
                <div className='card-header '>
                  <h2>Login form</h2>
                </div>

                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='form-group'>
                        <label>User Email <span className='errmsg'>*</span></label>
                        <input value={loginEmail} placeholder='enter name here' type="text" className='form-control' onChange={(e) => setloginEmail(e.target.value)} />
                      </div>
                    </div>





                    <div className='col-lg-6'>
                      <div className='form-group'>
                        <label>Password <span className='errmsg'>*</span></label>
                        <input value={loginPassword} placeholder='enter password here' type="password" className='form-control' onChange={(e) => setloginPassword(e.target.value)} />
                      </div>
                    </div>




                  </div>
                </div>
                <div className='card-footer'>
                  <button type='button' className='btn btn-primary mx-3 px-4' onClick={handlelogin}>login</button>
                  {/* <button type='button' className='btn btn-success '>Logout</button> */}
                  <Link className="btn btn-success" to={"/Registerpage"}>New User</Link>
                </div>

              </div>

            </form>
          </div>
        </div>

      </div>
    </>

  )
}

export default Loginform
