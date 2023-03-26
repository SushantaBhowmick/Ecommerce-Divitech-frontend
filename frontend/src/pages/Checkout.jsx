import React from 'react'
import Meta from '../components/Meta'

const Checkout = () => {
  return (
    <>
    {/* <Meta title="Order" />     */}
    <div className="checkout-wrapper"></div>
    <div className="container-xxl"></div>
    <div className="row">
        <div className="col-7">
            <div className="checkout-left-data">
                <h3 className="website-name">DiviTech</h3>
                <nav
                style={{"--bs-breadcrumb-divider " : '>'}}
                aria-lable="breadcrumb"
                >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <a href="/"> Home </a>
                        </li>
                        <li className="breadcrumb-item active" aria-label='page'>
                        <a href="#">Library</a>
                        </li>
                        
                    </ol>
                </nav>
            </div>
        </div>
        <div className="col-5"></div>
    </div>
    </>
  )
}

export default Checkout
// 8.37.00s