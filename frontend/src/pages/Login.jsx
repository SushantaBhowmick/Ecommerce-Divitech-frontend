import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'
import Meta from '../components/Meta'
const Login = () => {
  return (
    <>
    <Meta title={"Login"} />
    <BreadCrumb title="Login" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInputs type="email" name='email' placeholder='Email'/>
                        <CustomInputs  type="password" name='password' placeholder='Password'/>
                        
                        <div>
                            <Link to={"/forgot-password"}>Forgot Password?</Link>
                            <div className="d-flex mt-3 gap-15 align-items-center justify-content-center">
                                <button className="button border-0" type='submit'>Log In</button>
                                <Link to={"/sign-up"} className='button signup'>Sign Up</Link>
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

export default Login