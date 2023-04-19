import React, { useEffect, useState } from "react";
import {
  UilSearch,
} from "@iconscout/react-unicons";
import "./header.css";
import SubHeader from "./SubHeader";
import { useDispatch, useSelector } from "react-redux";
import SearchHeader from "./SearchHeader";
import { updateCartList } from "../../redux/cartSlice";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { getHeader } from "../../services/header";

const Header = () => {
  const [dataHeader, setDataHeader] = useState([]);
  const cartItemCount = useSelector((state) => state.cart.cartItem.length);

  const dispatch = useDispatch();
  useEffect(() => {
    getHeader()
      .then((res) => {
        setDataHeader(res.data.data);
      });
  }, []);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(updateCartList(cartItems));
  }, []);
  return (
    //
    <>
      <div className="header">
        <div className="header-menu store-container">
          <div className="left-header">
          <a href="/"><img
              src="https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=35279"
              alt=""
            /></a> 
          </div>
          <div className="right-header">
            <div className="right-header__line1">
              <div className="header-search">
                <SearchHeader></SearchHeader>
                <button className="header-search__button">
                  <UilSearch
                    style={{ width: "17px", height: "17px", fontWeight: "700" }}
                  ></UilSearch>
                </button>
              </div>
              <span className="right-header__line1-menu">
                {dataHeader &&
                  dataHeader.length > 0 &&
                  dataHeader[0].attributes.menuheader.link.map((item) => {
                    return (
                      <span>
                        <span style={{ marginLeft: "15px" }}>
                          <span
                            className="top-header__icon"
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          />
                          <span style={{ fontWeight: "700", fontSize: "15px" }}>
                            {item.label}
                          </span>
                        </span>
                      </span>
                    );
                  })}
                <Link to="cart/">
                  <span className="cart">
                    <Badge badgeContent={cartItemCount} color="error">
                      <ShoppingCartOutlined />
                    </Badge>
                  </span>
                </Link>
              </span>
            </div>
            <div className="right-header__line2">
              <span>
                {dataHeader &&
                  dataHeader.length > 0 &&
                  dataHeader[1].attributes.menuheader.link.map(
                    (item, index) => {
                      return (
                        <span>
                          <span>
                            <span className={index !== 3 && "span-left"}>
                              <span
                                className="mid-header__icon"
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                              />
                              <span key={item.id}>{item.label}</span>
                            </span>
                          </span>
                        </span>
                      );
                    }
                  )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", border: "1px solid #d4d4d4" }}></div>
      <div className='subheader-hide'>
        <SubHeader data={dataHeader}></SubHeader>
      </div>
      <div className="header-mobile row">
        <div className="col-2" style={{position:'relative',left:'10px',top:'3px'}}><i className="fa fa-bars" style={{fontSize:'24px'}}></i></div>
        <div className="col-8" >
          <div style={{display:'flex',position:'relative'}}>
            <img src="//theme.hstatic.net/1000026716/1000440777/14/logo-icon-01.svg?v=35343" alt="" style={{ width: '40px', height: '32px' }} className='header-logo__mobile'/>
            <img src="//theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=35343" alt="" className="header-logo__tablet"/>
            <SearchHeader></SearchHeader>
            <button className="header-search__button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="col-2">
          <Link to="cart/">
            <span className="cart">
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
