import React from 'react'
import {useNavigate} from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav'
const Home = () => {

  const navigate=useNavigate()

const Startfun=()=>{
  alert("Start")
  navigate("/Registerpage")
}


  return (
    <>
    <header></header>
    <section>
    <div className='container d-flex justify-content-center'>
       
       <img src="/mavaero.png" className="img-fluid" alt="Responsiveimage"/>
    </div>
   </section>

   <footer>
   <div className="d-flex justify-content-center">
   <button type="button" className="btn btn-secondary btn-lg" onClick={Startfun}>Start</button>
   </div>
   </footer>
    </>
  )
}

export default Home
