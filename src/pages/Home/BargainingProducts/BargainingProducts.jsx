import { Link } from "react-router-dom";
import FlashSaleBanner from "../../../components/FlashSaleBanner";
import { useState } from "react";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import useMediaQuery from "../../../hooks/useMediaQuery";

const BargainingProducts = () => {

  const productData = [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      oldPrice: 200,
      newPrice: 150,
      title: "Product 1",
      percentage: true,
      offer: 25,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
      oldPrice: 150,
      newPrice: 120,
      title: "Product 2",
      percentage: true,
      offer: 20,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Product_photography.jpg",
      oldPrice: 50,
      newPrice: 40,
      title: "Product 3",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://cdn.pixabay.com/photo/2018/08/29/14/47/perfume-3640056_1280.jpg",
      oldPrice: 1200,
      newPrice: 950,
      title: "Product 4",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://monatglobal.com/wp-content/uploads/2021/04/MONAT-Hair-and-Skincare-Products-_-MONAT-Global.jpg",
      oldPrice: 80,
      newPrice: 60,
      title: "Product 5",
      percentage: true,
      offer: 25,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/505677-HL-Is_Ensure_or_Boost_Healthier-1296x728-Header.jpg?w=1155&h=1528",
      oldPrice: 300,
      newPrice: 250,
      title: "Product 6",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://www.oberlo.com/media/1603954764-image059.png?w=1824&fit=max",
      oldPrice: 40,
      newPrice: 30,
      title: "Product 7",
      percentage: true,
      offer: 25,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      oldPrice: 180,
      newPrice: 150,
      title: "Product 8",
      percentage: true,
      offer: 20,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://1.bp.blogspot.com/-hsLsnlhJIZM/XmuYE4QlwfI/AAAAAAAAJaU/ESQm2jvhGDwtYoWB_tYztc4jahj7VggzwCLcBGAsYHQ/s1600/juta%2Bka%2Bphoto%2B%252817%2529.jpg",
      oldPrice: 70,
      newPrice: 60,
      title: "Product 9",
      percentage: true,
      offer: 15,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?cs=srgb&dl=pexels-alex-azabache-3907507.jpg&fm=jpg",
      oldPrice: 250,
      newPrice: 200,
      title: "Product 10",
      percentage: true,
      offer: 20,
      deliveryFree: true,
    },
  ];

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
          
          {productData?.map((data, i) => (
            <Cart2 data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BargainingProducts;

const Cart2 = ({ data }) => {
  const isSm = useMediaQuery("(min-width: 740px)");

  const product = data;
  // TODO
  // const url = "http://62.72.31.204:1300";

  const [hover, setHover] = useState(false);
  // const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);

  return (
    <Link
      to="/productDetails"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex-shrink-0 ${isSm || 'w-[45%]'} ${isSm && 'w-[20%]'} snap-start cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor`}
    >
      <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
        <img
          src={product.thumbnail}
          crossOrigin="anonymous"
          className="object-cover w-full h-full"
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
              <p className={`relative mr-1 line-through text-SubTextColor`}>
                {product.oldPrice} ৳
              </p>
              <p
                className={`relative ${
                  hover ? "text-CardColor" : "text-[#f84545]"
                } `}
              >
                {product.newPrice} ৳
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
            <p
              className={`relative line-clamp-1 ${
                hover ? "text-CardColor line-clamp-none" : "text-TextColor"
              } `}
            >
              {product.title}
            </p>
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
      {product.percentage && (
        <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-r-full top-2 p-1">
          <p className="text-xs text-[#fc3e3e] mr-1">OFF</p>
          <p className="text-sm text-CardColor p-1 bg-[#fc3e3e] rounded-full">
            {product.offer}%
          </p>
        </div>
      )}
      {product.deliveryFree && (
        <div className="absolute flex items-center justify-center bg-CardColor shadow-lg rounded-l-full top-2 p-1 right-0">
          <TbTruckDelivery className="text-MainColor text-[25px] ml-1 mr-1"></TbTruckDelivery>
          {/* <p className="text-xs text-[#fc3e3e] mr-1">OFF</p> */}
          <p className="text-sm text-CardColor p-1 bg-MainColor rounded-full">
            off
          </p>
        </div>
      )}
    </Link>
  );
};
