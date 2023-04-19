import React from "react";
import './Product.css';
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product({ data }) {
  const dispatch = useDispatch()
  const convertToVnd = (price) => {
    const VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(price);
  };
  
  const caculateSale = (oldPrice, newPrice) => {
    const salePercent = ((oldPrice - newPrice) / oldPrice) * 100;
    return `${Number.parseFloat(salePercent).toFixed(0)}%`;
  };
  return (
    <>
      <div className="col-6 col-xl-3 product-home" style={{ margin: 0 }}>
        <LazyLoad once={true} placeholder={<img src={`${process.env.REACT_APP_LINK_BACK_END}${data.attributes.image.data[0].attributes.url}`}
          alt="">
        </img>} className="card card-item product-item">
          <div className="card-img-top">
            <img src={`${process.env.REACT_APP_LINK_BACK_END}${data.attributes.image.data[0].attributes.url}`}
              alt="">
            </img>

            <div className="card-mark d-flex justify-content-center align-items-center">
              <Link to={`/product/${data.attributes.slug}`} style={{ color: 'white' }}>Click để xem chi tiết</Link>
              <p onClick={() => { dispatch(addToCart(data.attributes)) }}>Đặt hàng</p>
            </div>

          </div>

          <div className="card-body">
            <div className="product-item-name fs-sm-6">{data.attributes.name}</div>
            <div className="card-price">
              <div>
                <p className="oldprice">
                  {convertToVnd(data.attributes ? data.attributes.oldPrice : null)}
                </p>
                <p className="saleprice">
                  {convertToVnd(data.attributes ? data.attributes.price : null)}
                </p>
              </div>
              <div
                className="salepercent"
                style={{
                  backgroundImage: `url(https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png)`,
                }}
              >
                <span>
                  {caculateSale(
                    data.attributes ? data.attributes.oldPrice : null,
                    data.attributes ? data.attributes.price : null
                  )}
                </span>
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    </>
  );
}

export default Product;
