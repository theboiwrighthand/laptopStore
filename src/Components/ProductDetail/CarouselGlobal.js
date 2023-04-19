import { React } from "react";
import { Carousel } from "react-carousel-minimal";
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  width: "100%",
  height: "auto",
};
export default function CarouselGlobal({ hasImage = true, data, ...props }) {
 

  const dataImage = [{
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_3.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_6.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_8.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_10.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_11.jpg?v=34910",
  },
  {
    image: "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_12.jpg?v=34910",
  },

  ]


  return (
    <>
    
      {hasImage && data && data.length > 0  ? (
        <Carousel
          data={data}
          time={1500}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="15%"
          showNavBtn={true}
          style={{
            width: "100%",
            margin: "10px auto",
          }}
        />
      ) : (
        <Carousel
          data={dataImage}
          time={2000}
          width="850px"
          height="400px"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="contain"
          style={{
            width: "100%",
            margin: "10px auto",
            height:"100%"
          }}
        />
      )}
    </>
  );
}
