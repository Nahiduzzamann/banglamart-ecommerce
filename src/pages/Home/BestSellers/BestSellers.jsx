import { Link } from "react-router-dom";
import SellerShopCart from "../../../components/SellerShopCart";
import { useSelector } from "react-redux";

const BestSellers = () => {
  const data =useSelector(
    (state) => state.allSellerData.allSeller?.data
  )
  
  const seller =  data?.slice(0, 6)

  return (
    <div className="pb-4 pr-4 mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Best sellers</h1>
        </div>
        {data?.length > 6 && (
          <Link
            to="all-seller"
            className="mr-5 md:mr-6 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm"
          >
            View All Sellers
          </Link>
        )}
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pl-5 md:pl-10 pb-2 pt-2">
        {
          seller?.map((data,i)=>(<SellerShopCart key={i} data={data} />))
        }
      </div>
    </div>
  );
};

export default BestSellers;
