import { PiSmileySadLight } from "react-icons/pi";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsFillCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postApi } from "../../apis";
import { AuthContext } from "../../providers/AuthProvider";

const BargainingProductsPage = () => {
  const [bargainingProducts, setBargainingProducts] = useState([]);
  const data = useSelector(
    (state) => state.bargainingProducts.bargainingProducts?.data
  );
  useEffect(() => {
    setBargainingProducts(data);
  }, [data]);

  return (
    <div className="container mx-auto">
      <FlashSaleBanner
        bannerURL={
          "https://i.ibb.co/HPzrRX1/Building-a-Discount-Strategy-From-Scratch-Beware-of-Bargain-Hunters-linkedin.png"
        }
      ></FlashSaleBanner>
      <div className="mt-4">
        <h1 className="">Bargaining Products</h1>
        <div className="mt-4 m-1 ">
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {bargainingProducts?.length > 0 ? (
              bargainingProducts?.map((product, i) => (
                <ProductCart product={product} key={i}></ProductCart>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center mt-1">
                <PiSmileySadLight className="text-SubTextColor text-4xl"></PiSmileySadLight>
                <h1 className="text-SubTextColor">No Product Available</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BargainingProductsPage;

const ProductCart = ({ product }) => {
  // console.log(product);
  const { user, setCartUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = "https://api.banglamartecommerce.com.bd";

  const [hover, setHover] = useState(false);
  const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);
  const [newPrice, setNewPrice] = useState(product?.price);

  function calculatePercentage(value, percentage) {
    return (value * percentage) / 100;
  }

  useEffect(() => {
    if (product?.percentage) {
      const percentageValue = calculatePercentage(
        product?.price,
        product?.offer
      );
      setNewPrice(product?.price - percentageValue);
    } else {
      setNewPrice(product?.price - product?.offer);
    }
  }, [product]);

  const handleAddToCart = (id, minOrder) => {
    if (user) {
      const token = localStorage.getItem("token");
      postApi(
        "/cart/add",
        {
          productId: id,
          quantity: minOrder,
        },
        token
      )
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add to Cart successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          setCartUpdate(res.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      Swal.fire("Please LogIn");
      navigate("/login");
    }
  };
  return (
    <div>
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
          <img
            src={`${url}${product?.thumbnail}`}
             
            className="object-fill w-full h-full"
          />
        </div>
        <div
          className={`absolute bottom-0 w-full ${
            hover ? "bg-MainColor" : "bg-[#ffffffd7]"
          }`}
        >
          <div className="pl-2 pt-1 pb-1 flex justify-between items-center pr-2">
            <div>
              <div className="flex flex-wrap">
                {product?.price > newPrice && (
                  <p className={`relative mr-1 line-through text-SubTextColor`}>
                    {Math.ceil(product?.price)} ৳
                  </p>
                )}
                <p
                  className={`relative ${
                    hover ? "text-CardColor" : "text-[#f84545]"
                  } `}
                >
                  {Math.ceil(newPrice)} ৳
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
                className={`relative hover:underline break-all line-clamp-1 ${
                  hover ? "text-CardColor line-clamp-none" : "text-TextColor"
                } `}
              >
                {product?.title}
              </Link>
            </div>
            <div className="flex flex-col">
              {/* <button
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
              </button> */}
              <button
                onClick={() => handleAddToCart(product?.id, product?.minOrder)}
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
          <div className="absolute flex items-center justify-center bg-CardColor shadow-md shadow-[#f59090] rounded-r-full top-2 p-1">
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
    </div>
  );
};
