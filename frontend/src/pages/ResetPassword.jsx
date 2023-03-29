import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'
import Meta from '../components/Meta'

const ResetPassword = () => {
  return (
   <>
    <Meta title={"Reset Password"} />
    <BreadCrumb title="Reset Password" />

    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset Password</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInputs type="password" name='password' placeholder='Old Password' />
                        <CustomInputs type="password" name='password' placeholder='New Password' />

                        <div>
                            <div className="d-flex mt-3 gap-15 align-items-center justify-content-center">
                                <button className="button border-0" type='submit'>Change Password</button>
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

export default ResetPassword