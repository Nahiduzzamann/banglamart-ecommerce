import { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import Rating from "react-rating";

const ProductCart = ({ product }) => {
  // console.log(product);
    //const router = useRouter();
    // TODO 
  const url = 'http://192.168.1.9:1300';

    const [hover, setHover] = useState(false);
    const [heartIconHover, setHeartIconHover] = useState(false);
    const [cartIconHover, setCartIconHover] = useState(false);
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          //router.push(product.href);
        }}
        className="w-[95%] cursor-pointer group aspect-[20/25] rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor hover:shadow-lg"
      >
        <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
          {/* TODO  */}
          <img src={`${url}${product.thumbnail}`} crossOrigin="anonymous" className="object-fill w-full" />
        </div>
        {/* <span className="absolute inset-0 w-full h-full bg-primary/30" /> */}
        <div
          className={`absolute bottom-0 w-full ${
            hover ? "bg-MainColor" : "bg-[#ffffffd7]"
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
                  {product?.price} ৳
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
                {product.title}
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
            <p className="text-sm text-CardColor p-1 bg-[#fc3e3e] rounded-full">15%</p>
  
        </div>
      </div>
    );
  };
  export default ProductCart ;