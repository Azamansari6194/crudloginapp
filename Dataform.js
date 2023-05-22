import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const Dataform = () => {

  
  const [Licensenumber, setlicensenumber] = useState("");
  const [Validfrom, setValidfrom] = useState("")
  const [Validto, setValidto] = useState("")
  const [IssueCountry, setIssueCountry] = useState("")
  const [Licensedocument, setLicensedocument] = useState("")
  const [UserID, setUserID] = useState("")
  const [Licensetype, setLicensetype] = useState("")
  const [Category, setCategory] = useState("")
const[theName,settheName]=useState("");
const [thePhone,setthePhone]=useState("")


  const navigate=useNavigate()


const goBack=()=>{
 return navigate("/Loginform")  
}


  const Submitdata = (e) => {
    e.preventDefault();
    console.log("data is added")

    let inputdata={Licensenumber,Validfrom,Validto,IssueCountry,Licensedocument,UserID,Licensetype,Category,theName,thePhone}
    

    fetch(" http://localhost:3030/userdata",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(inputdata)
    }).then((response)=>{
alert("saved successfully")
navigate("/Datatable")
    }).catch((error)=>{
      console.log("error msg", error.message)
    })
  }


  let obj=JSON.parse(localStorage.getItem("user_login"));
  const{Name,Phone}=obj


const Namefun=()=>{
  console.log("Local storage Name,Local Storage Email ",Name)
  settheName(Name);
}

const Phonefun=()=>{
  console.log("Local storage Name,Local Storage Email ",Phone)
  setthePhone(Phone);
}

  

  return (
    <>

      <div className='container mt-3' >
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Add License Details</h3>




            <Form >
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Name<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="TheName" value={theName} onChange={Namefun} placeholder="enter user name same as registered" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Phone<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="TheName" value={thePhone} onChange={Phonefun} placeholder="enter user phone number same as registered" />
              </Form.Group>

              


              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>License Number<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="License Number" value={Licensenumber} onChange={(e) => setlicensenumber(e.target.value)} placeholder="Enter License number" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Valid from<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="date" name="Valid from" value={Validfrom} onChange={(e) => setValidfrom(e.target.value)} placeholder="enter start date" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Valid to<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="date" name="Valid to" value={Validto} onChange={(e) => setValidto(e.target.value)} placeholder="enter ending date" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Issuing Country<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="Issuing Country" value={IssueCountry} onChange={(e) => setIssueCountry(e.target.value)} placeholder="Issuing country" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>License Document<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="License Document" value={Licensedocument} onChange={(e) => setLicensedocument(e.target.value)} placeholder="Enter License document" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>UserID<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="User ID" value={UserID} onChange={(e) => setUserID(e.target.value)} placeholder="UserID" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>License type<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="License type" value={Licensetype} onChange={(e) => setLicensetype(e.target.value)} placeholder="Enter License type" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Category<span className='errmsg'>*</span></Form.Label>
                <Form.Control type="text" name="Category" value={Category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
              </Form.Group>




              <Button variant="primary" className='col-lg-2 mx-3' type="submit" onClick={Submitdata}>
                Submit
              </Button>
              <Button variant="primary" className='col-lg-2 bg-success' type="submit" onClick={goBack}>
                Back
              </Button>
            </Form>

          </div>
          <div className='right_data mt-3' style={{ width: "100%" }}>
            <div className='sign_img'>
              <img src="/Cold-Calling.png" style={{ maxWidth: 480 }} alt="Cold-Calling.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dataform
