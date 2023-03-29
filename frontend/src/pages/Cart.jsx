import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../images/watch.jpg"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Cart = () => {
  return (
   <>
   <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"}/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="d-flex py-3  cart-header justify-content-between align-items-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="d-flex py-3 mb-2 cart-data justify-content-between align-items-center">
               <div className='cart-col-1 d-flex align-items-center gap-15'>
                <div className='w-25'>
                  <img src={watch} className='img-fluid' alt="prooduct" />
                  </div>
                <div className='w-75'>
                  <p>tteefasdft</p>
                  <p>afd</p>
                  <p>asfd</p>
                </div>
               </div>
               <div className='cart-col-2'>
                <h5 className="price"> $ 100.00</h5>
               </div>
               <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div className="">
                  <input
                   type="number" 
                   className='form-control' 
                   name="" id="" 
                   min={1}
                   max={10}
                   
                   />
                  </div>
                <div className=""><AiFillDelete className='text-danger' /></div>
               </div>
               <div className='cart-col-4'>
               <h5 className="price"> $ 100.00</h5>

               </div>
              </div>


              <div className="d-flex py-3 mb-2 cart-data justify-content-between align-items-center">
               <div className='cart-col-1 d-flex align-items-center gap-15'>
                <div className='w-25'>
                  <img src={watch} className='img-fluid' alt="prooduct" />
                  </div>
                <div className='w-75'>
                  <p>ttsdfat</p>
                  <p>Size: afd</p>
                  <p>Color:asfasdf</p>
                </div>
               </div>
               <div className='cart-col-2'>
                <h5 className="price"> $ 100.00</h5>
               </div>
               <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div className="">
                  <input
                   type="number" 
                   className='form-control' 
                   name="" id="" 
                   min={1}
                   max={10}
                   
                   />
                  </div>
                <div className=""><AiFillDelete className='text-danger' /></div>
               </div>
               <div className='cart-col-4'>
               <h5 className="price"> $ 100.00</h5>

               </div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to={"/store"} className='button' >
                Continue Shopping
              </Link>
              <div className='d-flex flex-column align-items-end'>
                <h4>SubTotal: $1000</h4>
                <p>Texas and shipping calculated at checkout</p>
                <Link to={"/checkout"} className='button'>Checkout</Link>
              </div>
              </div>
            </div>
          </div>
      </Container>
   </>
  )
}

export default Cart