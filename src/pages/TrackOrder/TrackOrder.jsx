import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillCar } from "react-icons/ai";
import { FcAcceptDatabase } from "react-icons/fc";
import {
  MdIncompleteCircle,
  MdOutlineCancelPresentation,
  MdOutlineCancelScheduleSend,
  MdPendingActions,
} from "react-icons/md";
import { motion } from "framer-motion";
import { getApi } from "../../apis";
import { TbReceiptRefund } from "react-icons/tb";
import Swal from "sweetalert2";
const TrackOrder = () => {
  const url = "https://api.banglamartecommerce.com.bd";
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [orders, setOrders] = useState([]);
  const [updateOrders, setUpdateOrders] = useState();
  // console.log(orders);
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    getApi("/order/user", token)
      .then((res) => {
        setOrders(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [updateOrders]);
  const handleCancelOrder = (id) => {
    setLoading2(true);
    getApi(`/order/cancel/${id}`, null)
      .then((res) => {
        setUpdateOrders(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Canceled Order",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading2(false);
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading2(false);
      });
  };
  const [deliveryState, setDeliveryState] = useState("PENDING");

  const handleDeliveryStateChange = (newState) => {
    setDeliveryState(newState);
  };

  const getOrdersByState = (state) => {
    return orders.filter((order) => order?.status === state);
  };

  const deliveryStates = [
    {
      key: "PENDING",
      label: "PENDING",
      icon: <MdPendingActions className="mr-1"></MdPendingActions>,
    },
    {
      key: "CANCELLED",
      label: "CANCELLED",
      icon: (
        <MdOutlineCancelScheduleSend className="mr-1"></MdOutlineCancelScheduleSend>
      ),
    },
    {
      key: "REJECTED",
      label: "REJECTED",
      icon: (
        <MdOutlineCancelPresentation className="mr-1"></MdOutlineCancelPresentation>
      ),
    },

    {
      key: "ACCEPTED",
      label: "ACCEPTED",
      icon: <FcAcceptDatabase className="mr-1"></FcAcceptDatabase>,
    },

    {
      key: "COURIER",
      label: "COURIER",
      icon: <AiFillCar className="mr-1"></AiFillCar>,
    },
    {
      key: "REFUND",
      label: "REFUND",
      icon: <TbReceiptRefund className="mr-1"></TbReceiptRefund>,
    },
    {
      key: "COMPLETED",
      label: "COMPLETED",
      icon: <MdIncompleteCircle className="mr-1"></MdIncompleteCircle>,
    },
  ];
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-4">
      <Helmet>
        <title>Track Your Order | Banglamart E-commerce</title>
      </Helmet>
      <div className=" p-6 bg-CardColor rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-SubTextColor">
          Track Order
        </h2>
        <div className="mb-4 flex flex-wrap justify-center">
          {deliveryStates.map((state) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              key={state.key}
              onClick={() => handleDeliveryStateChange(state.key)}
              className={`px-4 m-2 rounded ${
                deliveryState === state.key
                  ? "bg-MainColor text-CardColor "
                  : "border border-BorderColor text-SubTextColor hover:underline"
              }`}
            >
              <h3 className="flex items-center">
                {state.icon} {state.label}
              </h3>
            </motion.button>
          ))}
        </div>
        <div className="mb-4 ">
          {getOrdersByState(deliveryState).map((order) => (
            <div
              key={order.id}
              className="card lg:card-side bg-CardColor mb-5 shadow-xl"
            >
              <figure>
                <img
                  src={`${url}${order?.product?.thumbnail}`}
                  className="h-60 ml-4 rounded-md"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between flex-wrap">
                  <div>
                    <h1 className=" text-MainColor mb-1">
                      {order?.product?.title}
                    </h1>
                    <h2 className="text-SubTextColor">
                      Quantity: {order?.quantity}
                    </h2>
                    <h1 className="text-SubTextColor">
                      Total Price: {order.totalAmount}TK
                    </h1>
                    <div className=" text-SubTextColor mt-2">
                      {order?.colors && (
                        <p className="">
                          Color:{" "}
                          <span className="font-semibold">
                            {order?.colors?.label}
                          </span>{" "}
                        </p>
                      )}
                      {order?.sizes && (
                        <p>
                          Size:{" "}
                          <span className="font-semibold">
                            {order?.sizes?.label}
                            {"("}
                            {order?.sizes?.value}
                            {")"}
                          </span>{" "}
                        </p>
                      )}
                      {order?.specifications && (
                        <p>
                          Specification:{" "}
                          <span className="font-semibold">
                            {order?.specifications?.label}
                          </span>{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {deliveryState === "PENDING" && (
                  <div className="card-actions justify-end">
                    {loading2 ? (
                      <div className="btn btn-info text-CardColor">
                        <span className="loading loading-spinner loading-md"></span>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="btn btn-info text-CardColor"
                        onClick={() => handleCancelOrder(order.id)}
                      >
                        Cancel Order
                      </motion.button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
