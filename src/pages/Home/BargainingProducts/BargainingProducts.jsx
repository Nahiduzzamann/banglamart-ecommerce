import { Link } from "react-router-dom";
import FlashSaleBanner from "../../../components/FlashSaleBanner";
import { useState } from "react";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useSelector } from "react-redux";
import EmptyContent from "../../../components/EmptyContent";

const BargainingProducts = () => {
  const bargainingProducts = useSelector(
    (state) => state.bargainingProducts.bargainingProducts?.data
  );
  // console.log(bargainingProducts);
  return (
    <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-[#440a96] rounded-lg p-4">
      <div className="flex pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="text-CardColor">Bargaining Products</h1>
        </div>
        <Link
          to="/bargaining-products"
          className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm"
        >
          View More
        </Link>
      </div>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 snap-x pt-5">
          {bargainingProducts?.length > 0 ? (
            bargainingProducts?.map((product, i) => (
              <Cart2 product={product} key={i} />
            ))
          ) : (
            <div className="mx-auto">
              <EmptyContent text="No Bargaining Product Available!"></EmptyContent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BargainingProducts;

const Cart2 = ({ product }) => {
  const isSm = useMediaQuery("(min-width: 740px)");
  // console.log(product);
  // TODO
  const url = "http://62.72.31.204:1300";

  const [hover, setHover] = useState(false);
  const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex-shrink-0 ${isSm || "w-[45%]"} ${
        isSm && "w-[20%]"
      } snap-start cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor`}
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img
          src={`${url}${product?.thumbnail}`}
          crossOrigin="anonymous"
          className="object-fill w-full h-full"
        />
      </div>
      <div
        className={`absolute bottom-0 w-full ${
          hover ? "bg-MainColor " : "bg-[#ffffffd7]"
        }`}
      >
        <div className="pl-2 pt-1 pb-1 flex justify-between items-center pr-2">
          <div>
            <div className="flex">
              <p
                className={`relative ${
                  hover ? "text-CardColor" : "text-[#f84545]"
                } `}
              >
                {product?.price} ৳
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
            <Link
              to={`/productDetails/${product?.id}`}
              className={`relative line-clamp-1 break-all hover:underline ${
                hover ? "text-CardColor line-clamp-none" : "text-TextColor"
              } `}
            >
              {product?.title}
            </Link>
          </div>
          <div className="flex flex-col">
            <button
              onMouseEnter={() => setHeartIconHover(true)}
              onMouseLeave={() => setHeartIconHover(false)}
              className=" mb-1"
            >
              {heartIconHover ? (
                <div
                  className="tooltip tooltip-info tooltip-left"
                  data-tip="Add Wishlist"
                >
                  <BsFillHeartFill
                    className={` text-[20px] ${
                      heartIconHover && "text-CardColor"
                    }`}
                  />
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
                <div
                  className="tooltip tooltip-info tooltip-left"
                  data-tip="Add Cart"
                >
                  <BsFillCartCheckFill
                    className={` text-[20px] ${
                      cartIconHover && "text-CardColor"
                    }`}
                  />
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
      {product?.percentage && (
        <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-r-full top-2 p-1">
          <p className="text-xs text-[#fc3e3e] mr-1">OFF</p>
          <p className="text-sm text-CardColor p-1 bg-[#fc3e3e] rounded-full">
            {product?.offer}%
          </p>
        </div>
      )}
      {product?.freeDelivery ? (
        <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-l-full top-2 p-1 right-0">
          <TbTruckDelivery className="text-MainColor text-[25px] ml-1 mr-1"></TbTruckDelivery>

          <p className="text-sm text-CardColor p-1 bg-MainColor rounded-full">
            off
          </p>
        </div>
      ) : (
        <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-l-full top-2 p-1 right-0">
          <TbTruckDelivery className="text-MainColor text-[25px] ml-1 mr-1"></TbTruckDelivery>

          <p className="text-sm text-CardColor p-1 bg-MainColor rounded-full">
            {product?.deliveryCharge} ৳
          </p>
        </div>
      )}
    </div>
  );
};
