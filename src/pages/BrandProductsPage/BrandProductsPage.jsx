import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiSmileySadLight } from "react-icons/pi";
import { getApi } from "../../apis";
import BrandShopCart from "../../components/BrandShopCart";
import ProductCart from "../../components/ProductCart";

const BrandProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedData = queryParams.get("data");
  const data = JSON.parse(decodeURIComponent(encodedData));
  const [productData, setProductData] = useState([]);
  console.log(productData);

  useEffect(() => {
    const token = localStorage.getItem("token");

    getApi(`/product/get-brand-product?brandId=${data?.id}`, token)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto bg-CardColor lg:mt-4 mt-2">
      <Helmet>
        <title>Brand Product | Banglamart E-commerce</title>
      </Helmet>
      <div className="flex justify-center border-b-[1px] border-b-BorderColor p-4">
        <BrandShopCart data={data}></BrandShopCart>
      </div>
      <div className="p-4">
        <h1 className="text-SubTextColor pb-4">Products</h1>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {productData?.length > 0 ? (
            productData?.map((product, i) => (
              <ProductCart product={product} key={i}></ProductCart>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-1">
              <PiSmileySadLight className="text-SubTextColor text-4xl"></PiSmileySadLight>
              <h1 className="text-SubTextColor">No Product Available</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProductsPage;
