import React, { useEffect, useState } from 'react'
import { addToCart } from "../../redux/cartSlice";
import {useDispatch } from 'react-redux'
import './Cart.css'
import axios from 'axios';


export default function CartParity({listCategories}) {
    const dispatch = useDispatch()
    const [listParityProduct,setListParityProduct] = useState([])
    let url = `${process.env.REACT_APP_API}/products?` 
    function getProductInCategories5Latest(listCategories){
        listCategories.forEach((item,index)=>{
            return url += `filters[idCategories][slug][$contains]=${item}&`
        })
        
    }
    
    getProductInCategories5Latest(listCategories)
    let lastUrl = url + 'sort[0]=updatedAt%3Adesc&populate=*'
    useEffect (()=>{
        axios.get(`${lastUrl}`)
        .then ((res)=>{
            setListParityProduct(res.data.data)
        })  
    },[lastUrl])

  return (
    <div>
        <div style={{width:'1200px'}} className='Page-Cart-ParityProduct'>
        <table border={1} style={{width:'100%',textAlign:"center"}}>
            <tbody>
                <tr>
                    <td><h2>Sản phẩm</h2></td>
                    <td><h2>Tên sản phẩm</h2></td>
                    <td><h2>Số lượng</h2></td>
                    <td><h2>Giá tiền</h2></td>
                </tr>
                {listParityProduct&&listParityProduct.map((item)=>{
                        return <tr key={item.attributes.name} style={{height:'150px'}}>
                            <td><h2><img alt='' style={{width:'100%',objectFit:'contain',height:'150px'}} src={`${process.env.REACT_APP_LINK_BACK_END}${item.attributes.image.data[0].attributes.url}`} /></h2></td>
                            <td><h2>{item.attributes.name}</h2></td>
                            <td><button onClick={()=>{
                                dispatch(addToCart(item.attributes))
                            }} >+</button></td>
                            <td style={{display:'flex',justifyContent:'center',alignItems:'center',height:'200px'}}><h2>{Number(item.attributes.price).toLocaleString('vi-VN', {style : 'currency', currency: 'VND'})}</h2></td>
                        </tr>
})}

            </tbody>
        </table>
    </div>

    </div>
  )
}