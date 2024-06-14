import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'


const SignUp = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "email": "",
            "phone": "",
            "gender": "",
            "password": "",
            "confirmpassword":""
            
        }


    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)


        axios.post("http://localhost:8080/signup", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("SUCCESSFULLY SIGNED IN")
                }
                else {
                    alert("PASSWORD INCORRECT")

                }
            }
        )
    }

    return (
        <div>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">EMAIL</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">PHONE</label>
                                <input type="number" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label" >GENDER</label>
                                <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler}/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button class="btn btn-info-emphasis" onClick={readValue}>SIGN-UP</button></div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href='/SignIn'>BACK TO SIGN-IN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp