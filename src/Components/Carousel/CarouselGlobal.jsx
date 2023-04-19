import Slider from "react-slick";
import "./CarouselGlobal.css";
import { React } from "react";

export default function CarouselVer2({ hasImage = true, data, ...props }) {

  let carouselHome = <Slider
    autoplay
    autoplaySpeed={1500}
    dots
    initialSlide={0}
    infinite
  >
    {data && data.map((item) => (
      <div key={Math.random()}>
        <img src={item} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    ))}
  </Slider>

  let carouselDetail = <Slider
    autoplay
    autoplaySpeed={1500}
    dots
    initialSlide={0}
    infinite
    customPaging={(i) => {
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={data[i]}
            alt=""
            style={{
              borderRadius: "5px",
              overflow:"hidden"
            }}
          />
        </div>
      );
    }}

    dotsClass="slick-dots custom-indicator"
  >
    {data && data.map((item) => (
      <div key={Math.random()}  >
        <img src={item} alt="" style={{ width: "100%", height:"100%", borderRadius:"5px" }} />
      </div>
    ))}
  </Slider>
  return <>
    <div className="carousel">
      {data && data.length > 0 ? (hasImage ? carouselDetail : carouselHome) : carouselHome}
    </div>

  </>
}