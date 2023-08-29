import { useState } from "react";

const TrackOrder = () => {
  // Simulated order data with confirmation status
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Camera",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "ordered",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
      confirmationStatus: "confirmed",
    },
    {
      id: 3,
      name: "Headphone",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "sentToCourier",
    },
    {
      id: 4,
      name: "NIKE swoosh",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      confirmationStatus: "ordered",
    },
    {
      id: 5,
      name: "Bag",
      price: 20,
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
    { key: "ordered", label: "Ordered" },
    { key: "confirmed", label: "Confirmed" },
    { key: "sentToCourier", label: "Sent to Courier" },
    { key: "delivered", label: "Delivered" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Track Order</h2>
        <div className="mb-4">
          {getOrdersByState(deliveryState).map((order) => (
            <div
              key={order.id}
              className="border p-4 flex items-center space-x-4"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <div className="text-lg font-semibold">{order.name}</div>
                <div className="text-gray-600">{order.price}TK</div>
              </div>
              <div className={` ${
                deliveryState === 'delivered' && 'hidden'}`}>Please wait for next step!</div>
            </div>
          ))}
        </div>
        <div className="mb-4 flex space-x-2">
          {deliveryStates.map((state) => (
            <button
              key={state.key}
              onClick={() => handleDeliveryStateChange(state.key)}
              className={`px-4 rounded ${
                deliveryState === state.key
                  ? "bg-MainColor text-CardColor "
                  : "bg-gray-200 text-gray-600 hover:underline"
              }`}
            >
              {state.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
