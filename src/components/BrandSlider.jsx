import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BrandSlider = () => {
  const [brandData, setBrandData] = useState([]);
  const brand = useSelector((state) => state.brand.brand.data);
  const show = brandData?.length > 3 ? 3 : brandData?.length;
  useEffect(() => {
    setBrandData(brand);
  }, [brand]);

  const animation = { duration: 5000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
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
              {data?.brandName}
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
