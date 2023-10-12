import { useContext, useEffect, useState } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteApi } from "../apis";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const CartComponent = ({ data }) => {
  const { setCartUpdate } = useContext(AuthContext);
  let product = data.product;

  // console.log(data?.colors.label);
  const url = "https://api.banglamartecommerce.com.bd";

  const [loading, setLoading] = useState(false);
  const [minOrder, setQuantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState();
  const [discount, setDiscount] = useState(null);
  const [vat, setVat] = useState(null);

  useEffect(() => {
    let actualAmount = product?.price;
    // let actualAmountWithDeliveryVat = actualAmount

    if (product?.percentage) {
      const disc = (product?.offer / 100) * actualAmount;
      setDiscount(disc);
      actualAmount -= (product?.offer / 100) * actualAmount;
    } else if (product?.offer > 0) {
      actualAmount -= product?.offer;
    }
    setTotalPrice(actualAmount);

    if (product?.vat > 0) {
      const vat = (product?.vat / 100) * actualAmount;
      setVat(vat);
      actualAmount += (product?.vat / 100) * actualAmount;
    }
    setQuantity(data?.quantity);
  }, [product, data]);

  // calculation portion

  const handleIncrease = () => {
    const newQuantity = minOrder + 1;
    setQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (minOrder > product?.minOrder) {
      const newQuantity = minOrder - 1;
      setQuantity(newQuantity);
    }
  };
  const handleRemoveFromCart = (id) => {
    setLoading(true);
    // console.log(id);
    const token = localStorage.getItem("token");
    deleteApi(`/cart/delete?cartId=${id}`, token)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Remove successfully.",
          showConfirmButton: false,
          timer: 1000,
        });
        setCartUpdate(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error.response.data.message);
      });
  };
  return (
    <div className=" mb-2 shadow-md hover:shadow-lg shadow-BorderColor">
      <div className="flex justify-between mt-2 mb-2 p-2 flex-wrap gap-4">
        <div className="flex items-center m-1">
          <img
            src={`${url}${product?.thumbnail}`}
            className="object-cover h-20 w-20 rounded"
          />
          <div className="ml-2">
            <Link
              to={`/productDetails/${product?.id}`}
              className="relative hover:underline break-all line-clamp-1"
            >
              {product?.title}
            </Link>
            <div className="flex items-center">
              <p className="mr-2 text-SubTextColor">Quantity:</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={handleDecrease}
                className="mr-2 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
              >
                <AiOutlineLine className=" text-SubTextColor" />
              </motion.button>
              <p className="mr-2 text-TextColor">{minOrder}</p>
              {minOrder == product?.quantity ? (
                <button
                  disabled
                  className="mr-4 rounded-full bg-[#e9a093] p-2 shadow-sm hover:shadow-md"
                >
                  <MdOutlineDisabledByDefault className=" text-CardColor" />
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={handleIncrease}
                  className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
                >
                  <AiOutlinePlus className=" text-TextColor" />
                </motion.button>
              )}
              <p className="mr-2 text-SubTextColor">
                available (<span>{product?.quantity}</span>)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className=" text-SubTextColor ml-4">
            {data?.colors && (
              <p className="">
                Color:{" "}
                <span className="font-semibold">{data?.colors?.label}</span>{" "}
              </p>
            )}
            {data?.sizes && (
              <p>
                Size:{" "}
                <span className="font-semibold">{data?.sizes?.label}{'('}{data?.sizes?.value}{')'}</span>{" "}
              </p>
            )}
            {data?.specifications && (
              <p>
                Specification:{" "}
                <span className="font-semibold">
                  {data?.specifications?.label}
                </span>{" "}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center m-1">
            <h2 className="line-through text-SubTextColor">
              {product?.price} ৳
            </h2>
            <h1 className="">{totalPrice?.toFixed()} ৳</h1>
            <div className="">
              {loading ? (
                <button
                  disabled
                  className="text-CardColor text-sm  flex bg-[#e65b5b]  pb-1 pl-2 pr-2 rounded-full"
                >
                  Loading...
                </button>
              ) : (
                <motion.button
                  onClick={() => handleRemoveFromCart(data?.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-CardColor flex bg-[#e65b5b] hover:underline pb-1 pl-2 pr-2 rounded-full"
                >
                  remove
                </motion.button>
              )}
            </div>
          </div>
        </div>
        {/* <div className="m-1">
          <div className=" w-40">
            <div className="flex justify-between">
              <p className="text-SubTextColor">Product Price:</p>
              <p className="text-SubTextColor">{newPrice} ৳</p>
            </div>
            {product?.percentage > 0 && (
              <div className="flex justify-between">
                <p className="text-SubTextColor">
                  Discount ({product?.offer}%)
                </p>
                <p className="text-SubTextColor">-{discount?.toFixed(2)} ৳</p>
              </div>
            )}
            {product?.vat > 0 && (
              <div className="flex justify-between">
                <p className="text-SubTextColor">Vat ({product?.vat}%)</p>
                <p className="text-SubTextColor">+{vat?.toFixed(2)} ৳</p>
              </div>
            )}
            {!product?.freeDelivery && (
              <div className="flex justify-between">
                <p className="text-SubTextColor">Delivery Charge</p>
                <p className="text-SubTextColor">
                  +{product?.deliveryCharge} ৳
                </p>
              </div>
            )}
            {!product?.percentage && product?.offer > 0 && (
              <div className="flex justify-between">
                <p className="text-SubTextColor">Discount</p>
                <p className="text-SubTextColor">-{product?.offer} ৳</p>
              </div>
            )}
            <div className="flex items-center justify-between border-t-SubTextColor border-t-[1px]">
              <p className="text-TextColor">Total Price:</p>
              <h1 className="text-MainColor">{finalPrice?.toFixed(2)} ৳</h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CartComponent;
