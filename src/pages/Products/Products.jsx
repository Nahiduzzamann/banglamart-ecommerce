import FilterCart from "../../components/FilterCart";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import { AiFillFilter } from "react-icons/ai";
const Products = () => {
  
  return (
    <div>
      <div className="container mx-auto">
        <FlashSaleBanner></FlashSaleBanner>
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="hidden lg:block">
            <div className="flex justify-center items-center border border-MainColor mb-4 p-1">
              <h1>
                <AiFillFilter className="text-MainColor"/>
              </h1>
              <h1 className="text-MainColor">Filters</h1>
            </div>
            <div>
            <div>
                <FilterCart></FilterCart>
            </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4">col-4</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
