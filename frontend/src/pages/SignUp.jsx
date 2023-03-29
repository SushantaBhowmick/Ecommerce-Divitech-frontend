import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'
import Meta from '../components/Meta'
const SignUp = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
    <BreadCrumb title="Create Account" />

    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create Account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInputs type="text" name='name' placeholder='Name'  />
                        <CustomInputs type="email" name='email' placeholder='Email'  />
                        <CustomInputs type="tel" name='mobile' placeholder='Mobile Number'  />
                        <CustomInputs type="password" name='password' placeholder='Password'  />
                       
                        <div>
                            <div className="d-flex mt-3 gap-15 align-items-center justify-content-center">
                                <button className="button border-0" type='submit'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default SignUp

// 6.13.31s

