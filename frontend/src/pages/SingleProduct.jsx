import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStarts from "react-rating-stars-component";


const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct ] = useState(true);
    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Officia, reprehenderit velit neque aliquid et
                                    iure vitae dolor tempora aut quidem? Laboriosam a
                                    veniam necessitatibus provident eligendi consequuntur
                                    perspiciatis odit distinctio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Review</h4>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStarts
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a href="" className='text-dark text-decoration-underline'>Write a Review</a>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div className="review-form">
                            <form action="" className='d-flex flex-column gap-15'>
                
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="populer-wrapper py-5 home-wrapper-2 ">
                <div className="container-xxl ">
                    <div className="row ">
                        <div className="col-12">
                            <h3 className="sextion-heading">Our Populer Products</h3>
                        </div>

                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct

//7.3.33s