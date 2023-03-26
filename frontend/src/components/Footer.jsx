import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsLinkedin, 
  BsTwitter, 
  BsInstagram, 
  BsGithub,
  BsYoutube
} from 'react-icons/bs'
import newsletter from '../images/newsletter.png'


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="News-Letter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : Near, SC Dhar Road,<br /> Baranagar, Kolkata <br />
                  Pincode:700090
                </address>
                <a href="tel:+91 7896541230" className='text-white mt-3 mb-1 d-block mb-3'> +91 7896541230</a>
                <a href="mymaildeveloper1@gmail.com" className=' mt-2 text-white mb-0 d-block mb-3'> mymaildeveloper1@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-3">
                  <a href="https://github.com/SushantaBhowmick"><BsGithub className='text-white fs-4' /> </a>
                  <a href="https://twitter.com/Sushant31147320"><BsTwitter className='text-white fs-4' /> </a>
                  <a href="https://www.youtube.com/@sushantabhowmick1031"><BsYoutube className='text-white fs-4' /> </a>
                  <a href="https://www.linkedin.com/in/sushanta-bhowmick-a9b98421b/"><BsLinkedin className='text-white fs-4' /> </a>
                  <a href="https://www.instagram.com/sushanta8514/"><BsInstagram className='text-white fs-4' /> </a>

                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to={'/privacy-policy'} className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to={'/refund-policy'} className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to={'/shipping-policy'} className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to={'/terms-condition'} className='text-white py-2 mb-1'>Terms & Condition</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white'>Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white"> &copy; {new Date().getFullYear()}: Powered by Sushanta Bhowmick </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer