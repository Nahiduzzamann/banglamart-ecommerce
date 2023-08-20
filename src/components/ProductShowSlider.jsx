import Slider from "react-slick/lib/slider";
import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import useMediaQuery from "../hooks/useMediaQuery";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
const Categories = [
  {
    id: 1,
    title: "Beautician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "It & Technology",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Lawyer",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 5,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 6,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 7,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 8,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 9,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 10,
    name: "Electrician",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
];
const ProductShowSlider = () => {
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
          <div className="p-cat-slider relative">
            <div className="relative w-full h-full">
              <span
                onClick={goNext}
                className="w-8 flex aspect-square text-CardColor shadow-lg rounded-full bg-MainColor hover:bg-MainColorHover -right-[6px] top-1/2 justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2 "
              >
                <HiOutlineChevronRight />
              </span>
              <span
                onClick={goPrev}
                className="w-8 flex aspect-square shadow-sm text-CardColor hover:bg-MainColorHover rounded-full bg-MainColor -left-4 top-1/2 justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2"
              >
                <HiOutlineChevronLeft />
              </span>

              <Slider
                ref={(slider1) => setMainSlider(slider1)}
                {...sliderSettings}
              >
                {Categories.map((product, i) => (
                  // <Cart categorie={categorie} key={i} />
                  <ProductCart product={product} key={i} ></ProductCart>
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

export default ProductShowSlider;

const Cart2 = ({ category }) => {
  const [hover, setHover] = useState(false);
  const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);
  return (
    <Link to='/productDetails'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex-shrink-0 w-[45%] snap-start cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor"
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img src={category.image} className="object-fill" />
      </div>
      {/* <span className="absolute inset-0 w-full h-full bg-primary/30" /> */}
      <div
        className={`absolute bottom-0 w-full ${
          hover ? "bg-MainColor " : "bg-[#ffffff91]"
        }`}
      >
        <div className="pl-2 pt-1 pb-1 flex justify-between items-center pr-2">
          <div>
            <div className="flex">
              <p className={`relative mr-1 line-through text-SubTextColor`}>
                1200 ৳
              </p>
              <p
                className={`relative ${
                  hover ? "text-CardColor" : "text-[#f84545]"
                } `}
              >
                1000 ৳
              </p>
            </div>
            <Rating
              initialRating={3.5}
              readonly
              emptySymbol={
                <AiOutlineStar className="text-BorderColor text-[14px]" />
              }
              fullSymbol={
                <AiFillStar className="text-BorderColor text-[14px]" />
              }
            />
            <p
              className={`relative ${
                hover ? "text-CardColor" : "text-TextColor"
              } `}
            >
              {category.name}
            </p>
          </div>
          <div className="flex flex-col">
            <button
              onMouseEnter={() => setHeartIconHover(true)}
              onMouseLeave={() => setHeartIconHover(false)}
              className=" mb-1"
            >
              {heartIconHover ? (
                <div className="tooltip tooltip-info tooltip-left" data-tip="Add Wishlist">
                <BsFillHeartFill className={` text-[20px] ${heartIconHover && 'text-CardColor'}`} />
              </div>
              ) : (
                <AiOutlineHeart
                  className={`text-[20px] ${
                    hover ? "text-CardColor" : "text-SubTextColor"
                  } `}
                />
              )}
            </button>
            <button
              onMouseEnter={() => setCartIconHover(true)}
              onMouseLeave={() => setCartIconHover(false)}
              className=""
            >
              {cartIconHover ? (
                <div className="tooltip tooltip-info tooltip-left" data-tip="Add Cart">
                <BsFillCartCheckFill className={` text-[20px] ${cartIconHover && 'text-CardColor'}`} />
              </div>
              ) : (
                <AiOutlineShoppingCart
                  className={`text-[20px] ${
                    hover ? "text-CardColor" : "text-SubTextColor"
                  } `}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-r-full top-2 p-1">
          <p className="text-xs text-[#fc3e3e] mr-1">OFF</p>
          <p className="text-xs text-CardColor p-1 bg-[#fc3e3e] rounded-full">15%</p>

      </div>
    </Link>
  );
};
