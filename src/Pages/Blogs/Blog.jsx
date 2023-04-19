import React, { useEffect, useState } from 'react'
import './Blog.css'
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from '../../services/blog';
import { useParams } from 'react-router-dom';
import RelatedArticles from './RelatedArticles';

export default function Blog() {
    
    let { slug } = useParams()
    const [blog, setBlog] = useState([])
    useEffect(() => {
        getBlogBySlug(slug)
            .then(res => {
                setBlog(res.data.data.attributes)
            })

    }, [slug])

    let content = String(blog.content)
    content = content.replaceAll("](/uploads", "](https://backoffice.nodemy.vn/uploads")
    return <>
        <div className='Blogs-page'>
            <div className="input-container blog-container">
                <input placeholder="Search something..." className="input" name="text" type="text" />
                <div className="icon">
                    <i className="bi bi-search"></i>
                </div>
            </div>
            <div className='blog-header'>
                <div className='blog-navbar blog-container'>
                    <div className='navbar-logo'>
                        <a href="/">
                            <img src="https://gstatic.gvn360.com/2021/12/icon_GVN360-300x300.png" alt="logo!" />
                        </a>
                    </div>
                    <ul className='navbar-menu'>
                        <li>Trang chủ</li>
                        <li>Công Nghệ <i className="bi bi-caret-down-fill"></i></li>
                        <li>Tin Game <i className="bi bi-caret-down-fill"></i></li>
                        <li>Hình Nền <i className="bi bi-caret-down-fill"></i></li>
                        <li>Mua Hàng</li>
                    </ul>
                </div>
            </div>
            <div className="blog-body blog-container">
                <div className='blog-content'>
                    <h1 style={{ display: "inline-block" }}>{blog ? blog.title : null}</h1>
                    <button className="btn-icon">
                        <div className="icon-social">
                            <i className="bi bi-share-fill shere"></i>
                            <i className="bi bi-facebook icon-shere"></i>
                            <i className="bi bi-twitter icon-shere"></i>
                            <i className="bi bi-pinterest icon-shere"></i>
                            <i className="bi bi-whatsapp icon-shere"></i>
                        </div>
                        <p>Share me</p>
                    </button>
                    <div className='contents' >
                       {content ? <ReactMarkdown>{content}</ReactMarkdown>:"Bài viết không tồn tại" } 
                    </div>
                    <div className="related-posts">
                    </div>
                </div>
                <div className="tab-game">
                    <RelatedArticles data={blog.likedBy}/>
                </div>
            </div>
            <div className="blog-footer ">
                <div className='footer-main blog-container'>
                    <div className="footer-logo">
                        <img style={{ width: "90%" }} src="https://gstatic.gvn360.com/2021/09/GVN360-544x180-01-300x99-1.png" alt="" />
                    </div>
                    <div className="footer-about">
                        <p>ABOUT US</p>
                        <p>GVN360 - GEARVN NEWS</p>
                        <p>Liên hệ chúng tôi: b78@nodemy.com</p>
                        <p>Contact us:<span style={{ color: "#dd3333" }}>b78@nodemy.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
