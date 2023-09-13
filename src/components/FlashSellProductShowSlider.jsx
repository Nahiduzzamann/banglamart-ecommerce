import Slider from "react-slick/lib/slider";
import { useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import useMediaQuery from "../hooks/useMediaQuery";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductCartFlashSell from "./ProductCartFlashSell";
import { TbTruckDelivery } from "react-icons/tb";

const FlashSellProductShowSlider = ({flashSellData}) => {
  const Categories = flashSellData
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
                {Categories?.map((data, i) => (
                  <ProductCartFlashSell
                  data={data}
                  key={i}
                ></ProductCartFlashSell>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {!isSm && (
          <div className="flex overflow-x-auto no-scrollbar gap-3 snap-x pt-5">
            {Categories?.map((data, i) => (
              <Cart2 data={data} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashSellProductShowSlider;

const Cart2 = ({ data }) => {
  const product = data.product;
  const oldPrice = product.price;
  //const router = useRouter();
  // TODO
  const url = "http://62.72.31.204:1300";

  const [hover, setHover] = useState(false);
  const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);
  const [newPrice, setNewPrice] = useState(oldPrice);

  function calculatePercentage(value, percentage) {
    return (value * percentage) / 100;
  }

  useEffect(() => {
    if (data.percentage) {
      const percentageValue= calculatePercentage(oldPrice, data.offer);
      setNewPrice(oldPrice-percentageValue)
    } else {
      setNewPrice(oldPrice - data.offer);
    }
  }, [data]);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex-shrink-0 w-[45%] snap-start cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor"
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img src={`${url}${product.thumbnail}`}
            crossOrigin="anonymous" className="object-cover w-full h-full" />
      </div>
      {/* <span className="absolute inset-0 w-full h-full bg-primary/30" /> */}
      <div
        className={`absolute bottom-0 w-full ${
          hover ? "bg-MainColor " : "bg-[#ffffffd7]"
        }`}
      >
        <div className="pl-2 pt-1 pb-1 flex justify-between items-center pr-2">
          <div>
            <div className="flex">
              <Link to={`/productDetails/${product?.id}`} className={`relative mr-1 hover:underline line-through text-SubTextColor`}>
              {oldPrice} ৳
              </Link>
              <p
                className={`relative ${
                  hover ? "text-CardColor" : "text-[#f84545]"
                } `}
              >
               {newPrice} ৳
              </p>
            </div>
            <Rating
              initialRating={3.5}
              readonly
              emptySymbol={
                <AiOutlineStar
                    className={` text-[14px] ${
                      hover ? "text-BorderColor" : "text-MainColor"
                    }`}
                  />
                }
                fullSymbol={
                  <AiFillStar
                    className={` text-[14px] ${
                      hover ? "text-BorderColor" : "text-MainColorHover"
                    }`}
                  />
                }
              />
              <Link to={`/productDetails/${product?.id}`}
                className={`relative hover:underline line-clamp-1 ${
                  hover ? "text-CardColor line-clamp-none" : "text-TextColor"
                } `}
              >
                {product.title}
              </Link>
          </div>
          <div className="flex flex-col">
            {/* <button
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
            </button> */}
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
      {data.percentage && (
          <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-r-full top-2 p-1">
            <p className="text-xs text-[#fc3e3e] mr-1">OFF</p>
            <p className="text-sm text-CardColor p-1 bg-[#fc3e3e] rounded-full">
              {data.offer}%
            </p>
          </div>
        )}
        {data.deliveryFree && (
          <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-l-full top-2 p-1 right-0">
            <TbTruckDelivery className="text-MainColor text-[25px] ml-1 mr-1"></TbTruckDelivery>
            {/* <p className="text-xs text-[#fc3e3e] mr-1">OFF</p> */}
            <p className="text-sm text-CardColor p-1 bg-MainColor rounded-full">
              off
            </p>
          </div>
        )}
    </div>
  );
};
