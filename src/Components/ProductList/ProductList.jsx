import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Pagination } from "antd"
import SkeletonLoad from "./SkeletonLoad";
import { getProductByCategory } from "../../services/product";
const ProductList = (dataListProduct) => {
  const [dataList, setDataList] = useState()
  const [pageSize, setpageSize] = useState([])
  const listCateGoryFromProduct = (dataListProduct.dataListProduct) || []
  function getListCategoriesFromListProduct(e) {
    return e.map((item) => {
      return item.attributes.idCategories ? item.attributes.idCategories.data.map((item) => {
        return item.attributes.slug
      }) : []
    })
  }
  const array = getListCategoriesFromListProduct(listCateGoryFromProduct)
  const array2 = new Set(array.flat().filter(Boolean))
  let url = `${process.env.REACT_APP_API}/products?`
  function getProductInCategories5Latest(array2) {
    array2.forEach((item, index) => {
      return url += `filters[idCategories][slug][$contains]=${item}&`
    })
  }

  getProductInCategories5Latest(array2)
  let lastUrl = url + 'sort[0]=updatedAt%3Adesc'
  useEffect(() => {
    async function getProductInCategories() {
      let result = await getProductByCategory(lastUrl)
      setDataList(result.data.data)
      setpageSize(result.data.meta.pagination.total)
    }
    getProductInCategories()
  }, [])

  const handleChangePage = (page, pageSize) => {
    async function getProductInCategories() {
      let result = await getProductByCategory(lastUrl, page)
      setDataList(result.data.data)
      setpageSize(result.data.meta.pagination.total)
    }
    getProductInCategories()
  }
  return (
    <div className="product-list-container">
      <div className="row">
        <h2 className="product-list__title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
        {dataList && dataList.length > 0 ? dataList.map(data => {
          return <Product data={data}></Product>
        }
        ) : <SkeletonLoad></SkeletonLoad>}
      </div>
      {dataList ? <Pagination total={pageSize} pageSize={4} onChange={handleChangePage} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} /> : null}
    </div>
  );
};




export default ProductList;