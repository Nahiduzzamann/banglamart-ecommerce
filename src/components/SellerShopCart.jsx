import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";

const SellerShopCart = ({ data }) => {
  const location = useLocation();
  return (
    <div className="mt-4 shadow-md shadow-BorderColor">
      <div className="p-2 flex items-center rounded-md bg-CardColor">
        <div className="ml-4 rounded-full h-20 w-20 border-r border-r-BorderColor">
          <img className="rounded-full h-20 w-20" src={data.thumbnail} alt="" />
        </div>
        <div className="flex flex-col p-2 w-[220px] sm:w-[270px] md:w-[280px] lg:w-[300px]">
          <h1 className="text-SubTextColor line-clamp-1">{data.shopName}</h1>
          <div className="mt-1">
            <Rating
              initialRating={data.ratings}
              readonly
              emptySymbol={
                <AiOutlineStar className="text-BorderColor text-[14px]" />
              }
              fullSymbol={
                <AiFillStar className="text-BorderColor text-[14px]" />
              }
            />
          </div>
          {location.pathname === "/shop-page" ? (
            <p className="text-SubTextColor">{data.address}</p>
          ) : (
            <Link
              to="/shop-page"
              className="pl-3 pr-3 pt-1 pb-1 rounded-full text-CardColor bg-MainColor hover:bg-MainColorHover shadow-md shadow-[#77ddfc] text-center"
            >
              Visit Store
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerShopCart;
