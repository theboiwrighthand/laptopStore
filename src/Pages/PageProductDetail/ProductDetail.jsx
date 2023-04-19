import './ProductDetail.css'
import { Divider, Typography, Button, Tabs, Space } from "antd";
import { React, useEffect, useState } from "react";
import NavBreadcrums from "../../Components/NavBreadcrums/NavBreadcrums";
import { useParams, Link } from 'react-router-dom'
import ProductDetailInfor from "./ProductDetail_infor";
import CarouselGlobal from "../../Components/Carousel/CarouselGlobal";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/cartSlice";
import { getProductBySlug } from '../../services/product'
const { Text } = Typography;

export const checkObjectKeys = (obj, keys) => {
  for (let i = 0; i < keys.length; i++) {
    if (!obj.hasOwnProperty(keys[i])) {
      return false;
    }
  }
  return true;
}
export default function ProductDetail() {
  const dispatch = useDispatch()
  let { slug } = useParams()
  let [product, setProduct] = useState({}) //(null)
  let [imageList, setImageList] = useState([])
  let checkResult = checkObjectKeys(product, ['name', 'idBrand', 'price', 'oldPrice'])
  const items = [
    {
      key: "1",
      label: `Mô tả sản phẩm`,
      children: product ? <ProductDetailInfor description={product.description} cpu={product.cpu} ram={product.ram} /> : " Không có thông tin",
    },
    {
      key: "2",
      label: `Đặc điểm nổi bật`,
      children: `Táo xịn`,
    },
    {
      key: "3",
      label: `Thông tin bảo hành`,
      children: `Bảo hành trọn đời`,
    },
  ];
  useEffect(() => {
    getProductBySlug(slug)
      .then(res => {
        setProduct(res.data.data.attributes)
        const listLink = []
        res.data.data.attributes.image.data.map(x => {
          let imgLink = `${process.env.REACT_APP_LINK_BACK_END}${x.attributes.url}`
          listLink.push(imgLink)
        })
        setImageList(listLink)
      })
  }, [slug])
  return <>
    {/* BreadCrumbs */}
    {checkResult && product ? <NavBreadcrums nameProduct={product.name} nameBrand={product.idBrand && product.idBrand.data.attributes.name} /> : null}

    <div className="Container store-container ">
      <div className="page_content"> 
        <div className="page_content_left">
          <div style={{ width: "80%", height: "70%", margin: "0 auto" }}>
            {/* Carousel */}
            <CarouselGlobal hasImage={true} data={imageList} ></CarouselGlobal>
          </div>
        </div>
        <div className="page_content_right">
          {checkResult && product ? <Typography.Title type="primary" level={2}>{product.name}</Typography.Title> : "SẢN PHẨM KHÔNG TỒN TẠI "}
          <p> Hãng sản xuất : <b>{checkResult && product && product.idBrand ? product.idBrand.data.attributes.name : null}</b> </p>
          <p> Bảo hành : 12 tháng </p>
          <Divider />
          <Divider />
          {checkResult && product ? <Typography.Title level={3} type="danger" >
            <span className="Discount">
              Ưu đãi đặc biệt khi mua kèm :
            </span>
          </Typography.Title> : null}
          <li>
            Mua kèm màn hình giảm sốc lên đên 49% (
            <Link to="#"> xem chi tiết</Link>).
          </li>
          <li>
            Mua kèm các sản phẩm khác giảm giá lên đến 56% (
            <Link to="#"> xem chi tiết</Link>).
          </li>
          <li>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.</li>
          <p>
            <span>Giá Cũ : </span>
            <span>
              {checkResult && product ? <Text strong type="secondary" delete> {Number(product.oldPrice)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </Text> : null}
            </span>
          </p>
          <p>
            <span>Giá KM : </span>
            <span>
              {checkResult && product ? <Text strong type="danger"> {Number(product.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </Text> : null}
            </span>
          </p>
          {(checkResult && product) ? <Button type="primary" size="large" danger onClick={() => { dispatch(addToCart(product)) }}>
            Đặt hàng
          </Button> : <Button type="primary" disabled size="large">Đặt hàng</Button>}
          <Space />
        </div>    
      </div>
      <div className="product_content_detail">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="middle"
          items={items}
        ></Tabs>
      </div>
    </div>
  </>
}