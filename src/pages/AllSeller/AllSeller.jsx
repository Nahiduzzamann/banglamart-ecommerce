import { Link } from "react-router-dom";
import "./buttonstyle.css";
import SellerShopCart from "../../components/SellerShopCart";
const AllSeller = () => {
  return (
    <div className="m-1 lg:m-0">
      <div className="container mx-auto">
        <div id="main" className="mt-4 mb-4">
          <Link to='/seller-form' id="animatedButton"></Link>
        </div>
        <div className="shadow-xl shadow-BackgroundColor rounded">
            <h1 className=" lg:mt-10 border-b border-b[1px] border-b-BorderColor">All Sellers</h1>
            <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
                <SellerShopCart></SellerShopCart>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllSeller;
