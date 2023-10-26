import { useEffect } from "react";
import { getApi } from "../../apis";
import { useState } from "react";

// const notifications = [
//   {
//     id: 1,
//     message: 'Your order #12345 has been shipped.',
//     date: '2023-09-10',
//   },
//   {
//     id: 2,
//     message: 'New arrivals: Check out our latest products!',
//     date: '2023-09-09',
//   },
//   {
//     id: 3,
//     message: 'Flash sale! Get 20% off on selected items.',
//     date: '2023-09-08',
//   },
// ];

const NotificationPage = () => {
  const [notifications,setNotifications] =useState([])
  console.log(notifications);
  useEffect(() => {
    const token = localStorage.getItem("token");
    getApi("/notification/read",token)
    .then((response) =>{
      setNotifications(response.data.data)
    })
  },[])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div>
              <p className="text-lg">{notification.message}</p>
              <p className="text-gray-500 text-sm">{notification.date}</p>
            </div>
            <button className="text-red-500">Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
