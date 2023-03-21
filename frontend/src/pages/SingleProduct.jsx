import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStarts from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
    const props = {
        width: 400,
        height: 250, 
        zoomWidth: 500, 
        img: "https://itechstore.co.in/wp-content/uploads/2021/06/Watch-SE2.jpg"};

    const [orderedProduct, setOrderedProduct] = useState(true);

    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div className="">
                                <ReactImageZoom {...props} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                                <h4>Description</h4>
                            <div className="bg-white p-4" style={{"borderRadius":"10px"}}>
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
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <h3>Reviews</h3>
                        <div className="col-12">
                            <div className="review-inner-wrapper"  style={{"borderRadius":"10px"}}>
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
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStarts
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                type="text"
                                                className="w-100 form-control"
                                                cols={"30"}
                                                rows="4" placeholder='Comments'
                                            />
                                        </div>
                                        <div className='d-flex justify-content-end '>
                                            <button className="button border-0 ">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                   <div className="d-flex gap-10 align-items-center">
                                    <h6 className='mb-0'>Sushanta</h6>
                                    <ReactStarts
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                   </div>
                                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur
                                             adipisicing elit. Tempora consectetur maxime quidem adipisci
                                              quibusdam iure rerum, quis omnis possimus nesciunt in neque
                                               nulla ipsum magni vero maiores et nostrum dolores?
                                            </p>
                                    </div>
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

//7.22.00s