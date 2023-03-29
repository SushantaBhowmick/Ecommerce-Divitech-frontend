import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
import {BsInfoCircle} from "react-icons/bs"
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
        <Meta title={"Contact Us"} />
        <BreadCrumb  title={"Contact"}/>
        <Container class1="contact-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.34734135593!2d88.27731232572302!3d22.535412195684884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1678899386316!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              className='border-0 w-100'
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" className="form-control"  placeholder='Name'/>
                      </div>
                      <div>
                        <input type="email" className="form-control"  placeholder='Email'/>
                      </div>
                      <div>
                        <input type="tel" className="form-control"  placeholder='Mobile Number'/>
                      </div>
                      <div>
                        <textarea 
                        type="text" 
                        className="w-100 form-control"
                        cols={"30"}
                        rows="4" placeholder='Comments'
                        />
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title">Get In Touch With Us</h3>
                    <div className="ps-0">
                      <ul>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Hno:43/1, Near US Club, Baranagar,North 24 Paragans, West Bengal</address>
                        </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:+91 8017052720">8017052720</a>
                        </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:mymaildevelopers1@gmail.com">
                        mymaildevelopers1@gmail.com
                        </a>
                        </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BsInfoCircle  className='fs-5'/>
                        <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default Contact
