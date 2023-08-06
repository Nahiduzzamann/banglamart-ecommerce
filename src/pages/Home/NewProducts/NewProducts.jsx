import Slider from "react-slick/lib/slider";
import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Categories = [
  {
    id: 1,
    name: "Beautician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/jrsFq1ROeFCQ1E0UIio5lzaHhYGXvMT6wYdJsD69.jpg",
  },
  {
    id: 2,
    name: "It & Technology",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/dE5GUN3L9apMDRaLnSM1FUwKqbWnQGcdV2lLg8Vr.jpg",
  },
  {
    id: 3,
    name: "Lawyer",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/dE5GUN3L9apMDRaLnSM1FUwKqbWnQGcdV2lLg8Vr.jpg",
  },
  {
    id: 4,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 5,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 6,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 7,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 8,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 9,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
  {
    id: 10,
    name: "Electrician",
    href: "/",
    image:
      "https://banglamartecommerce.com/public/uploads/all/LA2n6wYynDMGxyPCNCny6fDLHuAVlWrOpEj3x7i9.jpg",
  },
];
const NewProducts = () => {
  const totalSlides = Categories?.length || 1;
  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const isSm = useMediaQuery("(min-width: 640px)");

  const goNext = () => {
    mainSlider?.slickNext();
  };
  const goPrev = () => {
    mainSlider?.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    infinite: false,
    dots: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    touchThreshold: 4,
    focusOnSelect: true,
    beforeChange: (current, next) => setCurrentSlide(next + 1),
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
        {isSm && (
          <div className="p-cat-slider mt-4 relative">
            <div className="relative w-full h-full">
              <span
                onClick={goNext}
                className="w-8 flex aspect-square text-CardColor shadow-lg rounded-full bg-MainColor hover:bg-[#489fb4] right-0 top-1/2 justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2 "
              >
                <HiOutlineChevronRight />
              </span>
              <span
                onClick={goPrev}
                className="w-8 flex aspect-square shadow-sm text-CardColor hover:bg-[#489fb4] rounded-full bg-MainColor left-0 top-1/2 justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2"
              >
                <HiOutlineChevronLeft />
              </span>

              <Slider
                ref={(slider1) => setMainSlider(slider1)}
                {...sliderSettings}
              >
                {Categories.map((category, i) => (
                  <Cart category={category} key={i} />
                ))}
              </Slider>
            </div>
          </div>
        )}

        {!isSm && (
          <div className="flex overflow-x-auto no-scrollbar gap-3 snap-x pt-5">
            {Categories.map((category, i) => (
              <Cart2 category={category} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProducts;
const Cart = ({ category }) => {
  //const router = useRouter();

  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        //router.push(category.href);
      }}
      className="w-[90%] cursor-pointer group aspect-[357/370] rounded-xl relative overflow-hidden"
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img src={category.image} className="object-cover " />
      </div>
      {/* <span className="absolute inset-0 w-full h-full bg-primary/30" /> */}
      <div
        className={`absolute bottom-0 w-full flex justify-center items-center ${
          hover ? "bg-MainColor" : "bg-[#ffffff91]"
        }`}
      >
        <h2 className={`relative p-4 md:text-lg ${hover ? 'text-CardColor':'text-TextColor'} `}>
          {category.name}
        </h2>
      </div>
    </div>
  );
};
const Cart2 = ({ category }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex-shrink-0 w-[45%] snap-start cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden"
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img src={category.image} className="object-fill" />
      </div>
      {/* <span className="absolute inset-0 w-full h-full bg-primary/30" /> */}
      <div
        className={`absolute bottom-0 w-full flex justify-center items-center ${
          hover ? "bg-MainColor " : "bg-[#ffffff91]"
        }`}
      >
        <h2 className="relative p-4 text-TextColor md:text-lg">
          {category.name}
        </h2>
      </div>
    </div>
  );
};
