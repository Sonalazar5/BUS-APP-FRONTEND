import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">PHONE</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">GENDER</label>
                        <select>
                            <option>MALE</option>
                            <option>FEMALE</option>
                            <option>OTHER</option>
                        </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                        <input type="password" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-primary">SIGN-UP</button></div>
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