import ProductShowSlider from "../../../components/ProductShowSlider";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const [products, setProducts] = useState(null);
  const encodedData = encodeURIComponent(JSON.stringify("/product/get/top/sell"));
  const data = useSelector(
    (state) => state.bestSellingProduct.bestSellingProduct?.data
  );
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Best Selling</h1>
        </div>
        {products?.length > 10 && (
          <Link
            to={`/various-products-page?data=${encodedData}`}
            className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm"
          >
            View More
          </Link>
        )}
      </div>
      {products ? (
        <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
          <ProductShowSlider products={products}></ProductShowSlider>
        </div>
      ) : (
        <div className="flex justify-center items-center p-10">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
    </div>
  );
};

export default BestSelling;
