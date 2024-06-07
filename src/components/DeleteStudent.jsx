import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>DELETE STUDENT</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADM NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-danger">DELETE</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent