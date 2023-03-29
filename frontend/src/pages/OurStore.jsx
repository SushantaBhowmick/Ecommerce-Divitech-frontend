import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStarts from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color.jsx';
import Container from '../components/Container';


const OurStore = () => {
    const [grid, setGrid] = useState(4);
   
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-3'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                            <label className="form-check-label" htmlFor=''>
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                            <label className="form-check-label" htmlFor=''>
                                                Out Of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control py-1" id="floatingInput"
                                                placeholder='Form' />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating ">
                                            <input type="text" className="form-control py-1" id="floatingInput1"
                                                placeholder='To' />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                      <Color />
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" id="color-1" className="form-check-input" name="" value="checkedValue" />
                                            <label className="form-check-label" htmlFor='color-1'>
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" id="color-2" className="form-check-input" name="" value="checkedValue" />
                                            <label className="form-check-label" htmlFor='color-2'>
                                                M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter title">
                                    Products Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-centere gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Wire
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Tablet
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speaker
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            OppO
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Vivo
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-product mb-3 d-flex">
                                        <div className="w-50 ">
                                            <img src="images/watch.jpg" className='img-fluid ' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk multi colored for students</h5>
                                            <ReactStarts
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                    <div className="random-product d-flex">
                                        <div className="w-50 ">
                                            <img src="images/watch.jpg" className='img-fluid ' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk multi colored for students</h5>
                                            <ReactStarts
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                               <div className="d-flex justify-content-between align-items-center">
                               <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:</p>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">Best Selling</option>
                                        <option value="title-ascending">Alphabetically,A-Z</option>
                                        <option value="title-decending">Alphabetically,Z-A</option>
                                        <option value="price-decending">Price,low to high</option>
                                        <option value="price-decending">Price,high to low</option>
                                        <option value="created-decending">Date,old ot new</option>
                                        <option value="created-decending">Date,new to old</option>
                                        
                                    </select>
                                </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproucts mb-0">21 products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img src="images/gr4.svg" onClick={()=>{ setGrid(3) }} className='d-block img-fluid' alt="grid" />
                                            <img src="images/gr3.svg" onClick={()=>{ setGrid(4) }} className='d-block img-fluid' alt="grid" />
                                            <img src="images/gr2.svg" onClick={()=>{ setGrid(6) }} className='d-block img-fluid' alt="grid" />
                                            <img src="images/gr.svg"  onClick={()=>{ setGrid(12) }} className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default OurStore
//4.32.28s