import React from "react";
import CarouselGlobal from "../Carousel/CarouselGlobal";
import './CarouselHome.css'
import { useEffect, useState } from 'react'
import { getImgCarouselHome } from "../../services/homepage";
function CarouselHome() {
  const [dataImg, setDataImg] = useState([])

  useEffect(() => {
          getImgCarouselHome()
              .then(res => {
                const listLink = []
                    res.data.data.attributes.leftBanner.data.forEach((item) => {
                    let imgLink = `${process.env.REACT_APP_LINK_BACK_END}${item.attributes.url}`
                    listLink.push(imgLink)
                  })
                  setDataImg(listLink)
              })
  }, [])
  return (
    <>
      <CarouselGlobal hasImage={false} data={dataImg}  ></CarouselGlobal>
    </>
  );
}

export default CarouselHome;
