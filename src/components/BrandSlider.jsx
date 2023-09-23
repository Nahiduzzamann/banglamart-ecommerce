import { useEffect, useState } from "react";
import BrandCart from "./BrandCart";
import { useSelector } from "react-redux";
const brandData = [
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },
  {
    id: 1,
    name: "Samsung",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
  },

];


import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BrandSlider = () => {
  const [brandDataa, setBrandData] = useState([]);
  const brand = useSelector((state) => state.brand.brand.data);

  
const animation = { duration: 10000, easing: (t) => t }

  useEffect(() => {
    setBrandData(brand);
  }, [brand]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    slides: {
      perView: 5,
      spacing: 10,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {brandData?.map((data, i) => (
        <div key={i} className="keen-slider__slide">
          <BrandCart data={data} />
        </div>
      ))}
    </div>
  );
};

export default BrandSlider;
