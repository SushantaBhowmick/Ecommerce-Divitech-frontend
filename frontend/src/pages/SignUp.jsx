import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const SignUp = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
    <BreadCrumb title="Create Account" />

    <div className="login-wrapper home-wrapper-2 py-5">
   <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create Account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div className="">
                            <input type="text" name='name' placeholder='Name' className="form-control" />
                        </div>
                        
                        <div className="">
                            <input type="email" name='email' placeholder='Email' className="form-control" />
                        </div>
                        <div className="">
                            <input type="tel" name='mobile' placeholder='Mobile Number' className="form-control" />
                        </div>
                        <div className="mt-1">
                            <input type="password" name='password' placeholder='Password' className="form-control" />
                        </div>
                        <div>
                            <div className="d-flex mt-3 gap-15 align-items-center justify-content-center">
                                <button className="button border-0" type='submit'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SignUp

// 6.13.31s

