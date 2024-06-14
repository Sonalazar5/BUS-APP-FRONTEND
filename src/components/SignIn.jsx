import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [data,setdata] = useState(
        {
            "email":" ",
            "password":" "
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                 sessionStorage.setItem("token",response.data.token)
                 sessionStorage.setItem("userid",response.data.userid)
                 navigate("/add")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
        
      }
      let navigate =useNavigate()
  return (
    <div>
        <center><h2>LOGIN</h2></center>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-info-emphasis" onClick={readValue}>LOGIN</button>
                        </div>
                        </center>
                        <div>
                        <center>
                        <Link class="nav-link" to="/signup">SIGNUP</Link>
                        </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default <SignIn></SignIn>