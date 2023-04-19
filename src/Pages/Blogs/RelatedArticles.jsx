import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';


export default function RelatedArticles({ data }) {
  const list = [data]
  const [listBlog, setListBlog] = useState([])
  function getListCategoriesFromListBLog() {
    return list.map((item) => {
      return item ? item.data.map((item) => {
        return item.attributes.username
      }) : []
    })
  } 

  const array = getListCategoriesFromListBLog()
  const listCategoriesBlog = array.flat().filter(Boolean) 

  function getBlogInCategories5Latest(listCategoriesBlog) {
    let url = `${process.env.REACT_APP_API}/blogs?`
    listCategoriesBlog.forEach((item) => {
      url += `filters[likedBy][username][$contains]=${item}&`
    })
    return url + 'sort[0]=updatedAt%3Adesc&populate=*'
  }
  const lastUrl = getBlogInCategories5Latest(listCategoriesBlog)

  useEffect(() => {
    axios.get(`${lastUrl}`)
      .then((res) => {
        setListBlog([...res.data.data])
      })
  }, [lastUrl])
  return <>
    <div className='articles'>Related Articles</div>
    <div className='related-articles'>
      {listBlog.map((item) => {
        return <div class="article" key={item.id}>
            <img src={`${process.env.REACT_APP_LINK_BACK_END}${item.attributes?.image?.data?.attributes.url ? item.attributes?.image?.data?.attributes.url : null}`} alt="Article 1" />
            <h3>
              <a href={`/blogs/${item?.attributes.slug}`} >{item?.attributes?.title}</a>
            </h3>
            <p>{item?.attributes?.content}</p>
        </div>
      })}
    </div>
    <Pagination total={null} onChange={null} pageSize={4} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} />
  </>

}
