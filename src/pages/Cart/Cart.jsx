import { Link } from "react-router-dom";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getApi } from "../../apis";
import { Spinner } from "@chakra-ui/react";

const Cart = () => {
  const url = "http://62.72.31.204:1300";
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  // console.log(product);
  useEffect(() => {
    const token = localStorage.getItem("token");
    getApi("/cart/get", token)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="container mx-auto m-4">
      <Helmet>
        <title>Cart | Banglamart E-commerce</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-CardColor md:col-span-2 col-span-3">
          {product ? (
            product?.length > 0 ? (
              product?.map((product, i) => (
                <div
                  key={i}
                  className="border-b border-b-BorderColor mb-2 shadow-lg hover:shadow-lg shadow-BorderColor"
                >
                  {/* <div className="bg-BackgroundColor rounded-sm p-2 flex">
                    <img
                      src={product}
                      className="h-10 w-10 rounded"
                      alt=""
                    />
                    <p className="text-TextColor ml-2">
                      {product.sellerShopName}
                    </p>
                  </div> */}
                  <div className="flex mt-2 mb-2">
                    <div>
                      <img
                        src={`${url}${product?.product?.thumbnail}`}
                        crossOrigin="anonymous"
                        className="object-cover h-16 w-16"
                      />
                    </div>
                    <div className="w-full ml-2">
                      <div className="flex justify-between">
                        <div>
                          <h2>{product?.product?.title}</h2>
                        </div>
                        <div className="mr-2">
                          <h2>{product?.product?.price}৳</h2>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <p className="mr-2 text-SubTextColor">Quantity:</p>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="mr-2 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
                          >
                            <AiOutlineLine className=" text-SubTextColor" />
                          </motion.button>
                          <p className="mr-2 text-TextColor">{product?.quantity}</p>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="mr-2 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
                          >
                            <AiOutlinePlus className=" text-TextColor" />
                          </motion.button>
                          <p className="mr-2 text-SubTextColor">
                            available (<span>{product?.product?.quantity}</span>)
                          </p>
                        </div>
                        <div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="text-SubTextColor mr-2 underline text-[14px] font-bold"
                          >
                            remove
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Product Added</h1>
            )
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

        <div className="rounded-md p-3 bg-CardColor md:col-span-1 col-span-3 h-min">
          <div className="">
            {user?.address?.division ? (
              <div className="text-SubTextColor bg-BackgroundColor rounded p-2">
                <h1 className="text-MainColor">Your Delivery Address:</h1>
                <h2>{`${user.address.union}, ${user.address.subDistrict}, ${user.address.district}, ${user.address.division}`}</h2>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center p-2 bg-BackgroundColor rounded">
                <p className="text-TextColor">Please add your address</p>
                <Link
                  to="/addDeliveryAddress"
                  className="bg-TextColor pl-4 pr-4 p-1 rounded mt-1 shadow-sm shadow-BackgroundColor hover:shadow-TextColor"
                >
                  <p className="text-CardColor ">Add Address</p>
                </Link>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Subtotal</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Total</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="w-full mt-2 shadow-md shadow-SubTextColor hover:shadow-TextColor"
          >
            <div className="flex justify-center items-center bg-TextColor  p-1 rounded-sm ">
              <h2 className="text-CardColor">Confirm Order</h2>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
