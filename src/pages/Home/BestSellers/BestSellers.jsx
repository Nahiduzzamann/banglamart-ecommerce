import { Link } from "react-router-dom";
import SellerShopCart from "../../../components/SellerShopCart";

const BestSellers = () => {
    return (
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Best sellers</h1>
            </div>
            <Link to='all-seller' className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm">
              View All Sellers
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-4">
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
                <SellerShopCart/>
          </div>
        </div>
      );
    };

export default BestSellers;
