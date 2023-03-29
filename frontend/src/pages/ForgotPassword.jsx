import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'
import Meta from '../components/Meta'

const ForgotPassword = () => {
  return (
   <>
       <Meta title={"Forgot Password"} />
    <BreadCrumb title="Forgot Password" />

    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center mb-3 mt-2'>We will send your email to reset your password</p>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInputs type="email" name='email' placeholder='Email' />
                       
                        <div>
                            
                            <div className="d-flex mt-3 flex-column gap-15 align-items-center justify-content-center">
                                <button className="button border-0" type='submit'>Send</button>
                            <Link to={"/login"}>Cancel</Link>
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

export default ForgotPassword