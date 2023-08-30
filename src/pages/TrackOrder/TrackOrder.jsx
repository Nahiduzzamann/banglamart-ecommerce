import { useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineCheck, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";
const TrackOrder = () => {
  // Simulated order data with confirmation status
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Camera",
      price: 22220,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "ordered",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3330,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
      confirmationStatus: "confirmed",
    },
    {
      id: 3,
      name: "Headphone",
      price: 1115,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "sentToCourier",
    },
    {
      id: 4,
      name: "NIKE swoosh",
      price: 4120,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "ordered",
    },
    {
      id: 5,
      name: "Bag",
      price: 920,
      image:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80",
      confirmationStatus: "delivered",
    },
    // Add more orders here
  ]);

  const [deliveryState, setDeliveryState] = useState("ordered");

  const handleDeliveryStateChange = (newState) => {
    setDeliveryState(newState);
  };

  const getOrdersByState = (state) => {
    return orders.filter((order) => order.confirmationStatus === state);
  };

  const deliveryStates = [
    {
      key: "ordered",
      label: "Ordered",
      icon: <AiOutlineUnorderedList className="mr-1"></AiOutlineUnorderedList>,
    },
    {
      key: "confirmed",
      label: "Confirmed",
      icon: <AiOutlineCheck className="mr-1"></AiOutlineCheck>,
    },
    {
      key: "sentToCourier",
      label: "Sent to Courier",
      icon: <BsFillSendCheckFill className="mr-1"></BsFillSendCheckFill>,
    },
    {
      key: "delivered",
      label: "Delivered",
      icon: (
        <MdOutlineDeliveryDining className="mr-1"></MdOutlineDeliveryDining>
      ),
    },
  ];

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
        <div className="mb-4">
          {getOrdersByState(deliveryState).map((order) => (
            <div
              key={order.id}
              className="card lg:card-side bg-CardColor mb-5 shadow-xl"
            >
              <figure>
                <img
                  className="h-60 ml-4 rounded-md"
                  src={order.image}
                  alt={order.name}
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between flex-wrap">
                  <div>
                    <h1 className=" text-SubTextColor mb-1">{order.name}</h1>
                    <h1 className="text-SubTextColor">
                      Price: {order.price}TK
                    </h1>
                    <p className="w-72 text-SubTextColor">
                      description description description description
                      description description description description
                      description description description description
                      description description description description
                      description description description description
                      description description{" "}
                    </p>
                  </div>
                  <div>
                    <ul className="steps steps-vertical text-SubTextColor">
                      <li
                        className={`step ${
                          deliveryState === "ordered" && "step-info"
                        } ${deliveryState === "confirmed" && "step-info"} ${
                          deliveryState === "sentToCourier" && "step-info"
                        } ${deliveryState === "delivered" && "step-info"} `}
                      >
                        Ordered
                      </li>
                      <li
                        className={`step ${
                          deliveryState === "confirmed" && "step-info"
                        } ${deliveryState === "sentToCourier" && "step-info"} ${
                          deliveryState === "delivered" && "step-info"
                        }`}
                      >
                        Confirmed
                      </li>
                      <li
                        className={`step ${
                          deliveryState === "sentToCourier" && "step-info"
                        } ${deliveryState === "delivered" && "step-info"} `}
                      >
                        Sent to Courier
                      </li>
                      <li
                        className={`step ${
                          deliveryState === "delivered" && "step-info"
                        } `}
                      >
                        Delivered
                      </li>
                    </ul>
                  </div>
                </div>
                {deliveryState === "ordered" && (
                  <div className="card-actions justify-end">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className="btn btn-info text-CardColor"
                    >
                      Cancel Order
                    </motion.button>
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
