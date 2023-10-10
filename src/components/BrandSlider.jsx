import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BrandSlider = () => {
  const [brandData, setBrandData] = useState([]);

  const brand = useSelector((state) => state.brand.brand.data);
  useEffect(() => {
    setBrandData(brand);
  }, [brand, brandData]);

  const [show, setShow] = useState(6);

  const animation = { duration: 7000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    drag: false,
    renderMode: "performance",
    
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },

    slides: {
      perView: show,
      spacing: 5,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setShow(3);
      } else if (screenWidth <= 1024) {
        setShow(4);
      } else if (screenWidth <= 1440) {
        setShow(5);
      } else {
        setShow(7);
      }
    };

    // Initialize the screen size on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {brandData?.map((data, i) => (
          <div key={i} className="keen-slider__slide">
            <BrandCart data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;

import { Link } from "react-router-dom";

const BrandCart = ({ data }) => {
  const encodedData = encodeURIComponent(JSON.stringify(data));

  const [hover, setHover] = useState(false);
  const url = "https://api.banglamartecommerce.com.bd";

  return (
    <Link to={`/brand-product-page?data=${encodedData}`}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" bg-CardColor cursor-pointer group rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor hover:shadow-md h-36 w-36 lg:w-[95px] lg:h-[95px] xl:w-[125px] xl:h-[125px] 2xl:w-[145px] 2xl:h-[145px]"
      >
        <div className="inset-0 absolute  group-hover:scale-110 ease-in-out duration-300">
          <img
            src={`${url}${data?.brandIcon}`}
            className="object-fill h-full w-full "
          />
        </div>
        <div
          className={`absolute bottom-0 w-full ${
            hover ? "bg-MainColor" : "bg-[#fffffff8]"
          }`}
        >
          <div className="">
            <Link
              to={`/brand-product-page?data=${encodedData}`}
              className={`p-1 flex justify-center ${
                hover ? "text-CardColor underline" : "text-SubTextColor"
              } `}
            >
              <p className="font-semibold">{data?.brandName}</p>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
