import { Link } from "react-router-dom";
import "./buttonstyle.css";
import EmptyContent from "../../components/EmptyContent";
const AllSeller = () => {
  const AllSellers = [];
  return (
    <div className="m-1 lg:m-0">
      <div className="container mx-auto">
        <div id="main" className="mt-4 mb-4">
          <Link to="/seller-form" id="animatedButton"></Link>
        </div>
        <div className="shadow-xl shadow-BackgroundColor rounded">
          <h1 className=" lg:mt-10 text-SubTextColor">
            All Sellers
          </h1>
          <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {AllSellers.length>0 ? '':(<EmptyContent text='Currently No Seller Available'></EmptyContent>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSeller;
