import React from 'react'
import Loginform from './Component/Loginform'
import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registerpage from './Component/Registerpage'
import Datatable from './Component/Datatable'
import Dataform from './Component/Dataform'
import './App.css';
// import Formdata from './Component/Formdata'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
<>
{/* <ToastContainer></ToastContainer> */}
<BrowserRouter>
<Routes>
  <Route path="/"element={<Home/>} />
  <Route path="/Loginform"element={<Loginform/>} />
  <Route path="/Registerpage"element={<Registerpage/>} />
  <Route path="/Datatable"element={<Datatable/>} />

  <Route path="/Dataform"element={<Dataform/>} />

</Routes>
</BrowserRouter>
</>
  )
}

export default App



