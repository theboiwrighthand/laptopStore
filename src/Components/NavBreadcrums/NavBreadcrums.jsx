import React from "react";
import "./NavBreadcrums.css";
import { Link } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';

export default function Breadcrumbs({ nameProduct, nameBrand }) {
  return (
    <div className="breadcrumbs ">
      <div className="store-container">
        <span>Bạn đang ở:</span>
        <Link to='/'> Trang chủ</Link>
        <RightOutlined />
        <Link to="/" key={nameProduct}> {nameBrand} </Link>
        <RightOutlined />
        <span key={nameBrand}> {nameProduct} </span>
      </div>
    </div>
  );
}
