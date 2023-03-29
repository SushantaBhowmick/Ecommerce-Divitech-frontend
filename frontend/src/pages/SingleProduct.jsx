import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStarts from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/Color"
import { Link } from 'react-router-dom';
import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {FaShippingFast} from "react-icons/fa"
import Container from '../components/Container';



const SingleProduct = () => {
    const props = {
        width: 400,
        height: 600, 
        zoomWidth: 600, 
        // img: "https://itechstore.co.in/wp-content/uploads/2021/06/Watch-SE2.jpg"
        img:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
    };

    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
      

    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div className="">
                                <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex  gap-15">
                                <div>
                                    <img 
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                     className='img-fluid' alt="" />
                                     </div>
                                <div>
                                    <img 
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                     className='img-fluid' alt="" />
                                     </div>
                                <div>
                                    <img 
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                     className='img-fluid' alt="" />
                                     </div>
                                <div>
                                    <img 
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                     className='img-fluid' alt="" />
                                     </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-products-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids Headphone Bulk 10 Pack Multi Colored For Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">
                                        $ 100.00
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                    <ReactStarts
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0 t-review'>{ "2 Reviews"}</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Type : </h3> 
                                        <p className='product-data '>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Brand : </h3>
                                         <p className='product-data'> Havels</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Category :</h3>
                                         <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Tags :</h3> 
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Availablity :</h3> 
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex  gap-10 flex-column my-2 mt-2 mb-3'>
                                        <h3 className='product-heading'>Size : </h3> 
                                        <div className="d-flex gap-15 flex-wrap">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex  gap-10 flex-column my-2 mt-2 mb-3'>
                                        <h3 className='product-heading'>Color :</h3> 
                                        <Color />
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row my-2'>
                                        <h3 className='product-heading'>Quantity :</h3> 
                                        <div className="">
                                            <input
                                             type="number" 
                                             name='' 
                                             className='form-control'
                                             style={{width:"70px"}} 
                                             min={1} 
                                             max={15}
                                             />
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button className="button border-0" type='submit'>
                                                ADD TO CART
                                            </button>
                                            <button className='button signup ' >Buy it Now</button>
                                        </div>
                
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                            <div>
                                                <a href=""> <TbGitCompare className='fs-5  me-2' />Add to Compare</a>
                                            </div>
                                            <div>
                                                <AiOutlineHeart className='fs-5  me-2' />                                                <a href="">Add to Wishlist</a>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column my-3 gap-10'>
                                        <h3 className='product-heading'> <FaShippingFast/> Shipping & Returns : </h3> 
                                        <p className='product-data '>Free shipping and returns on
                                         all orders! <br /> We shipping all Us domestic within 
                                         <b> 5-10 business days!</b>
                                         </p>
                                    </div>
                                        <div className='d-flex align-items-center my-3 gap-10'>
                                        <h3 className='product-heading'>Copy Product Link : </h3> 
                                        <a 
                                        href="javascript:void(0);" 
                                        onClick={()=>copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}>
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
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
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <h3  id='review'>Reviews</h3>
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
                                <div  className="review-form py-4">
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
            </Container>
            <Container class1="populer-wrapper py-5 home-wrapper-2 ">
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
            </Container>
        </>
    )
}

export default SingleProduct

//8.00.00s