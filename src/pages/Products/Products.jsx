import FilterCart from "../../components/FilterCart";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import { AiFillFilter } from "react-icons/ai";
const Products = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <FlashSaleBanner></FlashSaleBanner>
      </div>
      <div className="container mx-auto mt-4 p-1 lg:p-0">
        <div className="grid grid-cols-5 gap-4">
          <div className="hidden lg:block">
            <div className="flex justify-center items-center border border-MainColor mb-4 p-1">
              <h1>
                <AiFillFilter className="text-MainColor mr-1" />
              </h1>
              <h1 className="text-MainColor">Filters</h1>
            </div>
            <div>
              <FilterCart title="filter by color"></FilterCart>
              <FilterCart title="filter by Brand"></FilterCart>
              <FilterCart title="filter by Vendors"></FilterCart>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4">
            <div className="flex justify-between items-center mb-4">
              <button className=" lg:hidden flex justify-center items-center border border-MainColor p-1">
                <h1>
                  <AiFillFilter className="text-MainColor mr-1 " />
                </h1>
                <h1 className="text-MainColor">Filters</h1>
              </button>
              <h2 className="text-TextColor">Total Products: 99</h2>
            </div>
            <div className="mt-4 ">
              <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
                <div className="h-40 w-20 bg-MainColor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
