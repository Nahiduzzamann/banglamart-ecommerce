import { Link } from "react-router-dom";
import { PiSmileySadLight } from "react-icons/pi";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner, Tooltip } from "@chakra-ui/react";
import CartComponent from "../../components/CartComponent";
import { useLocation } from "react-router";
import { getApi, postApi } from "../../apis";
import Swal from "sweetalert2";

const Cart = () => {
  const { user, cart } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  const [promoCode, setPromoCode] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [promoId, setPromoId] = useState(null);
  const [memberId, setMemberId] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      // If the product ID is in the array, remove it.
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      // If the product ID is not in the array, add it.
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleMemberCodeChange = (e) => {
    setMemberCode(e.target.value);
  };

  const applyPromoCode = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    getApi(`/codes/verify-promo-code?code=${promoCode}`, token)
      .then((r) => {
        // console.log(r.data.code.id);
        setPromoId(r.data.code.id)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Promo code invalid",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  const applyMemberCode = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    getApi(`/codes/verify-member-code?code=${memberCode}`, token)
      .then((r) => {
        // console.log(r.data.code.id);
        setMemberId(r.data.code.id)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Member code invalid",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  const handleCheckOut = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    postApi(
      "/order/check-out",
      {
        cartIds: selectedProducts,
        address: {
          division: user.address.division,
          district: user.address.district,
          subDistrict: user.address.subDistrict,
          union: user.address.union,
        },
        specialCodeId: memberId,
        promoId: promoId,
      },
      token
    )
      .then((res) => {
        setLoading(false);
        // console.log(res.data);
        setSubTotal(res.data.subTotal)
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
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
                  <CartComponent
                    key={i}
                    data={data}
                    handleCheckboxChange={handleCheckboxChange}
                    selectedProducts={selectedProducts}
                  ></CartComponent>
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
            <form onSubmit={applyPromoCode}>
              <div className="relative">
                <label className="block text-SubTextColor text-sm font-bold mb-1">
                  Apply Promo Code
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-SubTextColor leading-tight focus:outline-MainColor"
                  placeholder="Enter Coupon Code"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  required
                />
                <p className="text-xs text-[#ff6868]">
                  *Apply promo code to get a discount
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  className="text-sm absolute text-CardColor top-[25px] right-0 rounded-r-full bg-MainColor p-2"
                >
                  Apply
                </motion.button>
              </div>
            </form>

            <form onSubmit={applyMemberCode}>
              <div className="relative">
                <label className="block text-SubTextColor text-sm font-bold mb-1">
                  Apply Member Code
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-SubTextColor leading-tight focus:outline-MainColor"
                  placeholder="Enter Coupon Code"
                  value={memberCode}
                  onChange={handleMemberCodeChange}
                  required
                />
                <p className="text-xs text-[#ff6868]">
                  *Apply Member code to get a discount
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  className="text-sm absolute text-CardColor top-[25px] right-0 rounded-r-full bg-MainColor p-2"
                >
                  Apply
                </motion.button>
              </div>
            </form>
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
            <h3 className="text-TextColor">{subTotal} ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Code Discount</h3>
            <h3 className="text-TextColor">(-) 0 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Total</h3>
            <h3 className="text-TextColor">0 ৳</h3>
          </div>
          {selectedProducts.length > 0 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleCheckOut}
              className="w-full mt-2 shadow-md shadow-SubTextColor hover:shadow-TextColor"
            >
              <div className="flex justify-center items-center bg-TextColor  p-1 rounded-sm ">
                <h2 className="text-CardColor">
                  Confirm To Checkout ({selectedProducts.length})
                </h2>
              </div>
            </motion.button>
          ) : (
            <div className="flex justify-center w-full mt-2 shadow-md shadow-SubTextColor hover:shadow-TextColor items-center bg-TextColor  p-1 rounded-sm cursor-not-allowed">
              <Tooltip label="Please select product" aria-label="A tooltip">
                <h2 className="text-CardColor">Confirm To Checkout</h2>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
