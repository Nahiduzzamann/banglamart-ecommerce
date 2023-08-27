import Slider from "react-slick/lib/slider";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import BrandCart from "./BrandCart";
const Categories = [
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 2,
    name: "Sony",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/V4ocaHg8gsJjD7sHLPzW1Rv7f3uHn5HHkcG53uLM.png",
  },
  {
    id: 3,
    name: "Canon",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/LJo6SY6kiOjQbjD9y03xGwhltH0xQmYzsMNUR0SB.png",
  },
  {
    id: 4,
    name: "Shaowmi",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/thvGEjxTkdRYQP3LG0cJ6VwzLLsMwEK2evsiHjSj.png",
  },
  {
    id: 5,
    name: "Symphony",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/fKzLfPh3iCrTSBjSSn8aywBVf6JskLt7GDHOXgc4.jpg",
  },
  {
    id: 6,
    name: "LG",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/nATwNMgTp3SyPWazFIPfj0hk2AOrASZXEE9lMpuc.png",
  },
  {
    id: 7,
    name: "Huawei",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/DqIXFAOzCElMOWRaVYBRfJUPL8q0HAM6XYEMLoi5.jpg",
  },
  {
    id: 8,
    name: "Oppo",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/tFqlLqF179N7NwJ3ZOWfoxSdkpKpeC3aM9ugxhWZ.png",
  },
  {
    id: 9,
    name: "Yamaha",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/43VEXCh4MiMtWOsBMk34WYwozfWWF0jcMxs49qYn.png",
  },
  {
    id: 10,
    name: "Suzuki",
    href: "/",
    image:
      "	https://banglamartecommerce.com/public/uploads/all/1hWjVqkIzP5no5zjblJjHvK0dmHH0lUdSA6gm7U1.png",
  },
];
const BrandSlider = () => {
  const totalSlides = Categories?.length || 1;
  const [mainSlider, setMainSlider] = useState();

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: false,
    touchThreshold: 4,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center">
      <div className="container ">
        {
          <div className="p-cat-slider relative">
            <div className="relative w-full h-full">
              <Slider
                ref={(slider1) => setMainSlider(slider1)}
                {...sliderSettings}
              >
                {Categories.map((data, i) => (
                  <BrandCart data={data} key={i} />
                ))}
              </Slider>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default BrandSlider;