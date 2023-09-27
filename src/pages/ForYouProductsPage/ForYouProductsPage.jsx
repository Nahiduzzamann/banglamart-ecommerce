
import { AiFillFilter } from "react-icons/ai";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import FilterCart from "../../components/FilterCart";
import ProductCart from "../../components/ProductCart";
import EmptyContent from "../../components/EmptyContent";

const ForYouProductsPage = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(
    (state) => state.forYouProducts.forYouProducts?.data
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="">
      <Helmet>
        <title>For You Products | Banglamart E-commerce</title>
      </Helmet>
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className=" lg:hidden flex justify-center items-center border border-MainColor p-1"
              >
                <h1>
                  <AiFillFilter className="text-MainColor mr-1 " />
                </h1>
                <h1 className="text-MainColor">Filters</h1>
              </motion.button>
              <h2 className="text-TextColor">
                Total Products: {products?.length}
              </h2>
            </div>
            <div className="mt-4 ">
              <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                {products ? (
                  products.length > 0 ? (
                    currentProducts.map((product) => (
                      <ProductCart
                        product={product?.productInfo}
                        key={product.id}
                      ></ProductCart>
                    ))
                  ) : (
                    <EmptyContent text="No Product Available!"></EmptyContent>
                  )
                ) : (
                  <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
                    <h3>
                      <Skeleton count={1} width={200} height={250} />
                    </h3>
                  </SkeletonTheme>
                )}
              </div>
              {/* Pagination */}
              <div className="flex justify-center m-4">
                <div className="join">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      key={index}
                      className={`join-item btn btn-md border border-BorderColor ${
                        index + 1 === currentPage
                          ? " btn-disabled"
                          : "bg-MainColorHover"
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouProductsPage;
