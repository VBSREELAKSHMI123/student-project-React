import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {
    const [data,setData]=useState(
[
    {"name":"lakshmi","adms":101},
    {"name":"anu","adms":102},
    {"name":"maya","adms":103},
]
    )
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>STUDENT DETAILS</b></h1></center>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                       {data.map (
                        (value, index) => {
                            return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card">
      <img src="https://img.freepik.com/free-photo/cute-girl-with-schoolbag_144627-26608.jpg" height="250px"class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{value.name}</h5>
        <p class="card-text">{value.adms}</p>
        <a href="#" class="btn btn-primary">DETAILS</a>
      </div>
    </div>
                            </div>
                        }
                       )

                       }
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent