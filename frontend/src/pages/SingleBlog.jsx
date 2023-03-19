import React from 'react'
import BlogCard from '../components/BlogCard'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title={"Dynamic Blog Name"} />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                      
                        <div className="col-12">
                            <div className="single-blog-card">
                                <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                                <img src="../images/blog-1.jpg" alt="blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBlog