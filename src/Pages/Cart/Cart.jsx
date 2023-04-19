import './Cart.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCartList } from '../../redux/cartSlice'
import CartParity from './CartParity'
export default function Cart(){
    const dataApi = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    const [list,setList] = useState(dataApi)
    function getListCategoriesFromListProduct(e){
        return e.map((item)=>{
            return item.idCategories?item.idCategories.data.map((item)=>{
                return item.attributes.slug
            }):[]
        })
    }
    const array =  getListCategoriesFromListProduct(list)
    const listCategories = array.flat().filter(Boolean)
    
    function OnChangeTextInput(e) {
        var indexElement = e.target.getAttribute('data')
        list[indexElement].quantity = e.target.value
        setList([...list])
     } 
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(list));
        
    })

    const dispatch = useDispatch();
    
   
    return <>
    <div className="Page-Cart" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}} >
        <div className="Page-Cart-Header"> <h1>GIỎ HÀNG <i style={{fontSize:'35px'}} className="bi bi-cart"></i></h1></div>
        <div className="Page-Cart-Body" style={{width:'1200px'}}>
            <table border={1} style={{width:'100%',textAlign:"center"}}>
                <tbody>
                <tr>
                    <td>
                        <h2>SẢN PHẨM</h2>
                    </td>
                    <td>
                        <h2>Tên Sản Phẩm</h2>
                    </td>
                    <td>
                        <h2>Số Lượng</h2>
                    </td>
                    <td>
                        <h2>Giá Tiền</h2>
                    </td>
                    <td>
                        <h2>Xoá</h2>
                    </td>
                </tr>
                {list.map((item,index)=>{
                  return    <tr key={index} style={{height:'150px'}}>
                            <td style={{width:'20%'}} className="Page-Cart-Body-img">
                            <img style={{width:'100%',objectFit:'contain',height:'150px'}} src={`${process.env.REACT_APP_LINK_BACK_END}${item?.image?.data[0]?.attributes?.url}`} alt=''></img>
                            </td>
                            <td  className='Page-Cart-Body-NameItem'>
                                <span>{item.name}</span>
                            </td>
                            <td style={{width:'20%'}}>
                                <input style={{width:'30%',border:'1px solid black',textAlign:'center'}} data={index} onChange={OnChangeTextInput} type="number" value={item.quantity} min='1'/>
                            </td>
                            <td style={{width:'20%'}}>
                                {(item.price*item.quantity).toLocaleString('vi-VN', {style : 'currency', currency: 'VND'})}
                            </td>
                            <td  className='Page-Cart-Body-Remove'>
                            <button  onClick={function ClickToRemove(){
                                list.splice(index,1)
                                setList([...list])
                                localStorage.setItem('cart', JSON.stringify(list));
                                // dispatch(updateCartList(list))
                                
                                
                            }} ><i className="bi bi-trash3-fill"></i></button>
                            </td>
                           </tr>
                 })}
                        <tr style={{height:'70px'}}>
                        <td colSpan="4"><h2 style={{fontSize:'25px'}} >Tổng tiền:</h2></td>
                        <td><h2 style={{fontSize:'20px'}}>
                            {
                                (list.reduce(function(total, item){
                                    return total + (item.price * item.quantity)
                                }, 0)).toLocaleString('vi-VN', {style : 'currency', currency: 'VND'})
                            }
                        </h2></td>
                     </tr>
                  <tr>
                    <td  colSpan='5'><input className='Page-Cart-Body-Note'  type="text" placeholder='Ghi Chú'/></td>
                  </tr>
                </tbody>               
            </table>
        </div>
        <div className='Page-Cart-Footer'><button onClick={()=>{window.location.href = 'checkout/'}}>Thanh toán</button></div>
        <div className="Page-Cart-Header"> <h1>Sản Phẩm Tương Tự</h1></div>
        {listCategories &&<CartParity listCategories={listCategories} />}
    </div>
    
    
    </>

}