import React, { useState, useEffect } from "react";
import {
  UilBars
} from "@iconscout/react-unicons";
import MegaMenu from "../../Pages/Menu/MegaMenu";
import { useHref } from 'react-router-dom';
import './header.css'

const SubHeader = ({ data }) => {
  const [dataMega, SetDataMega] = useState([]);
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);
  const [isShowListMenu, setIsShowListMenu] = useState(false);
  const address = useHref();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/dropdown-tabs?populate[0]=section&populate[1]=section.image&populate[2]=section.link`
    )
      .then((res) => res.json())
      .then((data) => {
        SetDataMega(data.data);
      });
  }, []);
  
  return (
    <>
      <div className="sub-header__background ">
        <div style={{ height: "10px" }}></div>
        <div className="sub-header store-container">
          <span
            className="sub-header__menu"
            onMouseEnter={() => setIsShowMenuItem(true)}
            onMouseLeave={() => setIsShowMenuItem(false)}
          >
            <UilBars></UilBars>Danh mục sản phẩm
          </span>
          <span className="sub-header__instruction" style={{display:'flex', flex:'1'}}>
            {data &&
              data.length > 0 &&
              data[2].attributes.menuheader.link.map((item, index) => {
                return (
                  <a href="#" className="header-a__color">
                    <span
                      className="bottom-header__icon"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    {item.label}
                  </a>
                );
              })}
          </span>
        </div>
      </div>
      { address === '/' ? null :  isShowMenuItem && (
        <div className="Category-sub-header store-container"
          onMouseEnter={() => setIsShowMenuItem(true)}
          onMouseLeave={() => setIsShowMenuItem(false)}
        >
          <MegaMenu />
        </div>
      ) }
    </>
  );
};

export default SubHeader;
