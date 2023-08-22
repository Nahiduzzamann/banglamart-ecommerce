import { Link } from "react-router-dom";
import "./buttonstyle.css";
const AllSeller = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div id="main" className="mt-4 mb-4">
          <Link to='/seller-form' id="animatedButton"></Link>
        </div>
        <div>All Seller</div>
      </div>
    </div>
  );
};

export default AllSeller;
