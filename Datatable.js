import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Datatable = () => {
    const [userdata, setuserdata] = useState([]);

const navigate=useNavigate()


    useEffect(() => {
        fetch("http://localhost:3030/userdata").then((response) => {
            return response.json();
        }).then((response) => {

            console.log(response);
            setuserdata(response)


        }).catch((error) => {
            console.log(error.message)
        })
    }, [])
    // let { Licensenumber, Validfrom, Validto, IssueCountry, Licensedocument, UserID, Licensetype, Category } = userdata

    const Removefunction = (id) => {
        window.confirm("do you want to delete user data ?");
        fetch("http://localhost:3030/userdata/" + id, {
            method: "DELETE",

        }).then((response) => {
            alert("Removed successfully")
            window.location.reload()
            localStorage.removeItem("user_login")
        }).catch((error) => {
            console.log("error message", error.message)
        })

    }

    const funlogout=()=>{
       if( window.confirm("Are you sure you want ot logout")){
        navigate("/");
    }
    alert("logout successfully")
    }


    return (
        <>
            {/* <h2>hello this is data table</h2> */}

            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2>User Listing</h2>

                    </div>
                    <div className="card-body">
                        <div className="div-btn">
                        <Button className='btn btn-success' onClick={funlogout}>LogOut</Button>

                        </div>
                        <div className='table-responsive'>
                            <table className="table table-bordered ">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td> Name </td>
                                        <td>License number</td>
                                        <td>Valid from</td>
                                        <td>Valid to</td>
                                        <td>Issuing Country</td>
                                        <td>License document</td>
                                        <td>UserID</td>
                                        <td>License Type</td>
                                        <td>Category</td>
                                        <td>Action</td>

                                    </tr>
                                </thead>
                                <tbody>



                                    {userdata &&
                                        userdata.map(item => (
                                            <tr key={item.id}>

                                                <td> {item.id}</td>
                                                <td>{item.theName}</td>
                                                <td> {item.Licensenumber}</td>
                                                <td> {item.Validfrom}</td>
                                                <td> {item.Validto}</td>
                                                <td> {item.IssueCountry}</td>
                                                <td> {item.Licensedocument}</td>
                                                <td> {item.UserID}</td>
                                                <td> {item.Licensetype}</td>
                                                <td> {item.Category}</td>
                                                {/* <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a> */}
                                                <td>
                                                    <Button onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</Button>
                                                    {/* <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                               
 
                            </table>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Datatable
