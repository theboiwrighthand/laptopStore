import React, { useEffect, useState } from 'react'
import './ProductBlogList.css'
import { Pagination } from 'antd';

export default function ProductBlogList() {
  const [blogList, setblogList] = useState([])
  const [pageSize, setpageSize] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/blogs?pagination[page]=1&pagination[pageSize]=4&populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setblogList(res.data);
        setpageSize(res.meta.pagination.total)
      })        
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/blogs?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setpageSize(res.data);
      })
  }, [])

  const handleChangePage = (page, pageSize) => {
    fetch(`${process.env.REACT_APP_API}/blogs?pagination[page]=${page}&pagination[pageSize]=4&populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setblogList(res.data);
      })
  };


  return (
    <div className='blog-list-container'>
      <div className='row'>
        <h2 className="blog-list__title">PC GEARVN - TOP LIST PC NỔI BẬT</h2>
      </div>
      <div className='row'>
        <div className='col-12 col-lg-9 blog-list__left'>
          {blogList.map((item) => {
            return <div className='row' key={item.id}>
              <div className='col-12 pd-0 col-lg-4 img-fluid overflow-hidden'>
                <img style={{width:300,height:300}}src={`${process.env.REACT_APP_LINK_BACK_END}${item.attributes.image.data.attributes.url}`} alt={`${process.env.REACT_APP_LINK_BACK_END}${item.attributes.image.data.attributes.url}`}></img>
              </div>
              <div className='col-12 col-lg-8 pt-2 pt-lg-5'>
                <h2 className='fw-bold text-danger blog-list-item__tittle'>{item?.attributes?.title}</h2>
                <p className='blog-list__content'>{item?.attributes?.content}</p>
              </div>
            </div>

          })}

          <Pagination total={pageSize} onChange={handleChangePage} pageSize={4} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} />
        </div>
      </div>

    </div>
  )
}