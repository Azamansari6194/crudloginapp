import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Registerpage = () => {
  // const [idName,setidName]=useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  const [Phone, setPhone] = useState("")



  const navigate = useNavigate();

const goingBack=()=>{
  navigate("/")
}



  const handlesubmit = (e) => {



    e.preventDefault();
    // let dataObj = { Name, Email, Password, Phone }
    //  console.log("dataObj= "+dataObj);
    console.log("emails is here & password", Email, Password)
    
    if (Name === "") {
      alert("enter name")

    }
    else if (/\d/.test(Name)) {
      alert("User name cannot have number")
    }


    else if (Email === "") {
      alert("enter email")
    }

    else if (!Email.includes("@")) {
      alert(" @ is missing in Email entered")
    }


    else if (Password === "") {
      alert("password cannot be empty")
    }
    else if(Password.length<5){
      alert("password length is small")
    }

    else if (Phone === "") {
      alert("Phone cannot be empty")
    }
else if(isNaN(Phone)){
alert("enter numeric value only")
}




    else {


      let loginDetails={Name,Email,Password,Phone}
      localStorage.setItem("user_login",JSON.stringify(loginDetails))
      alert("registered succesfully");
navigate("/Loginform")


      // npx json-server --watch db.json --port 3030 // to start the json server
      // fetch(" http://localhost:3030/posts", {
      //   // name: "ADMIN-LOGIN",
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(dataObj)
      // }).then((response) => {
      //   alert("registered succesfully");
      //   console.log("registered successfully")
      //   navigate('/Loginform')

      // }).catch((error) => {
      //   alert("registeration failed ")
      //   console.log("error message ", error.message)
      // })

      // console.log(dataObj)

    }
  }

  return (
    <>
   
      <div>
        {/* <h2>this is registration page</h2> */}
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' >
            <div className='card'>
              <div className='card-header'>
                <h2>Registration</h2>
              </div>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>User Name <span className='errmsg'>*</span></label>
                      <input value={Name} placeholder='enter name here' type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Email <span className='errmsg'>*</span></label>
                      <input value={Email} placeholder='enter email here' type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>



                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Password <span className='errmsg'>*</span></label>
                      <input value={Password} placeholder='enter password here' type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Phone no.<span className='errmsg'>*</span></label>
                      <input value={Phone} type="text" placeholder='enter phone here' className='form-control' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                  </div>


                </div>
              </div>
              <div className='card-footer'>
                <button type='button' className='btn btn-primary mx-3' onClick={handlesubmit}>Register</button>
                <button type='button' className='btn btn-success 'onClick={goingBack}>Go Back</button>
              </div>

            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Registerpage
