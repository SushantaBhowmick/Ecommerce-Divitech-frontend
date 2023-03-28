import React from 'react';
import ReactStarts from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import productcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-1.avif"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {
    let location = useLocation();
   const {grid} = props;
  return (
 
   <>
   <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`} >
    <Link to={"/product/:id"} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'><img src={wish} alt="wishlists" /></button>
        </div>
        <div className="product-image">
            <img src={watch} className='img-fluid' alt="product images" />
            <img src={watch2} className='img-fluid' alt="product images" />

        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 multi colored for students
            </h5>
            <ReactStarts 
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
            />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
                At vro eos et accusamus et iusto  odio dignissimos ducimus qui
                blanditiis praesentium voluptatum daleniti tque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
                <img src={productcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src={view} alt="add to cart" />
                </button>
                <button className='border-0 bg-transparent'>
                <img src={addcart} alt="view" />
                </button>
               
            </div>
        </div>
    </Link>
   </div>

   <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`} >
    <Link to={"/product/:id"} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent' ><img src={wish} alt="wishlists" /></button>
        </div>
        <div className="product-image">
            <img src={watch} className='img-fluid' alt="product images" />
            <img src={watch2} className='img-fluid' alt="product images" />

        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 multi colored for students
            </h5>
            <ReactStarts 
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
            />
             <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
                At vro eos et accusamus et iusto  odio dignissimos ducimus qui
                blanditiis praesentium voluptatum daleniti tque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent' >
                <img src={productcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent' >
                <img src={view} alt="add to cart" />
                </button>
                <button className='border-0 bg-transparent' >
                <img src={addcart} alt="view" />
                </button>
               
            </div>
        </div>
    </Link>
   </div>
   </>
   
  )
}

export default ProductCard