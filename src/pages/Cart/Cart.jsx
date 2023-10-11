import { Link } from "react-router-dom";
import { PiSmileySadLight } from "react-icons/pi";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner } from "@chakra-ui/react";
import CartComponent from "../../components/CartComponent";
import { useLocation } from "react-router";

const Cart = () => {
  const { user, cart } = useContext(AuthContext);
  // console.log(cart);
  const location = useLocation();
  const [promoCode, setPromoCode] = useState("");
  const [memberCode, setMemberCode] = useState("");

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleMemberCodeChange = (e) => {
    setMemberCode(e.target.value);
  };

  const applyPromoCode = () => {
    // Add logic to apply the promo code here
    console.log(`Applied Promo Code: ${promoCode}`);
  };

  const applyMemberCode = () => {
    // Add logic to apply the member code here
    console.log(`Applied Member Code: ${memberCode}`);
  };
  return (
    <div className="container mx-auto m-4">
      <Helmet>
        <title>Cart | Banglamart E-commerce</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-CardColor md:col-span-2 h-min col-span-3">
          {user ? (
            cart ? (
              cart?.length > 0 ? (
                cart?.map((data, i) => (
                  <CartComponent key={i} data={data}></CartComponent>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <PiSmileySadLight className="text-SubTextColor text-8xl"></PiSmileySadLight>
                  <h1 className="text-SubTextColor">No Product Added</h1>
                </div>
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
            )
          ) : (
            <div className="flex justify-center items-center p-10">
              <h2 className="text-SubTextColor pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
                Please{" "}
                <Link
                  to="/login"
                  state={{ from: location }}
                  replace
                  className="text-MainColor font-bold cursor-pointer hover:underline"
                >
                  Login
                </Link>{" "}
                to see your cart{" "}
              </h2>
            </div>
          )}
        </div>

        <div className="rounded-md p-3 bg-CardColor md:col-span-1 col-span-3 h-min">
          {/* apply code section  */}
          <div className="mb-4 relative">
            <label className="block text-SubTextColor text-sm font-bold mb-1">
              Apply Promo Code
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-MainColor"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={handlePromoCodeChange}
            />
            <p className="text-xs text-[#ff6868]">
              *Apply promo code to get discount
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="text-sm absolute text-CardColor top-[25px] right-0 rounded-r-full bg-MainColor p-2"
              onClick={applyPromoCode}
            >
              Apply
            </motion.button>

            <label className="block text-SubTextColor text-sm font-bold mb-1 mt-4">
              Apply Social Member Code
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-SubTextColor leading-tight focus:outline-MainColor "
              placeholder="Enter Member Code"
              value={memberCode}
              onChange={handleMemberCodeChange}
            />
            <p className="text-xs text-[#ff6868]">
              *Apply social member code to get discount
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="text-sm absolute text-CardColor top-[118.5px] right-0 rounded-r-full bg-MainColor p-2"
              onClick={applyMemberCode}
            >
              Apply
            </motion.button>
          </div>

          <div></div>
          {/* buy section */}
          <div className="">
            {user?.address?.division ? (
              <div className="text-SubTextColor bg-BackgroundColor rounded p-2">
                <h1 className="text-MainColor">Your Delivery Address:</h1>
                <h2>{`${user.address.union}, ${user.address.subDistrict}, ${user.address.district}, ${user.address.division}`}</h2>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.8 }}
                  className="py-1 px-2 mt-2 shadow-md shadow-SubTextColor hover:shadow-TextColor rounded-full bg-TextColor"
                >
                  <p className="text-CardColor">Update address</p>
                </motion.button>
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
            <h3 className="text-TextColor">0 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Code Discount</h3>
            <h3 className="text-TextColor">(-) 0 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Total</h3>
            <h3 className="text-TextColor">0 ৳</h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
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
