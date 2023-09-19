import { Link } from "react-router-dom";
import { PiSmileySadLight } from "react-icons/pi";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner } from "@chakra-ui/react";
import CartComponent from "../../components/CartComponent";

const Cart = () => {
  const { user,cart } = useContext(AuthContext);
  return (
    <div className="container mx-auto m-4">
      <Helmet>
        <title>Cart | Banglamart E-commerce</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-CardColor md:col-span-2 col-span-3">
          {cart ? (
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
