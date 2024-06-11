import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "rollno":"",
            "admno":"",
            "college":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>STUDENT REGISTRATION</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ROLL NO</label>
                            <input type="text" className="form-control"name='rollno' value={data.rollno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ADM NO</label>
                            <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COLLEGE</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                            <br />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center>
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AddStudent