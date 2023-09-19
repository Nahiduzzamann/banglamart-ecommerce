import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getApi } from "../apis";
import { Spinner } from "@chakra-ui/react";

const Banner = () => {
  const url = "http://62.72.31.204:1300";

  const [sliders, setSliders] = useState(null);
  console.log(sliders);
  useEffect(() => {
    getApi("/adds/get/slider", null)
      .then((res) => {
        setSliders(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);
  return (
    <div className="">
      <Carousel
        className=" max-h-[400px]"
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={2000}
        // centerMode={true}
        // centerSlidePercentage={95}
      >
        {sliders ? (
          sliders.map((slider, i) => (
            <div key={i} className="">
              <img
                className="object-fill max-h-[300px]"
                src={`${url}${slider?.image}`}
                crossOrigin="anonymous"
                alt="Slider Image 1"
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center p-10 ">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default Banner;
