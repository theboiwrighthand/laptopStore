import { React, useEffect, useState } from "react";
import List from "./List";
import "./header.css";
import useDebounce from "../HOC/useDebounce";
import axios from "axios";
const SearchHeader = () => {
  const [inputText, setInputText] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const debounceTextSearchValue = useDebounce(inputText, 1000);

  useEffect(() => {
    const fetchData = (query) => {
      axios.get(`/products?filters[name][$contains]=${query}&populate=*`).then((res) => {
        let data = res.data
        setDataSearch(data.data);
      });
    };

    if (debounceTextSearchValue) {
      fetchData(debounceTextSearchValue);
    } else {
      setDataSearch([]);
    }
  }, [debounceTextSearchValue]);

  return (
    <div className="main">
      <div className="search">
        <input
          className="header-search__input"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          placeholder="Nhập mã hoặc tên sản phẩm ..."
        />
      </div>
      {<List dataList={dataSearch} inputValue={inputText} />}
    </div>
  );
};

export default SearchHeader;
