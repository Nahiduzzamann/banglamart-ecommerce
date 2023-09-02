
const Profile = () => {
  // Replace with user data from your backend or context
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, City, Country",
    phoneNumber: "+1234567890",
    ordersCount: 10, // Replace with actual order count
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        <div className="mb-4">
          <div className="font-semibold mb-1">Name:</div>
          <p>{userData.name}</p>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Email:</div>
          <p>{userData.email}</p>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Address:</div>
          <p>{userData.address}</p>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Phone Number:</div>
          <p>{userData.phoneNumber}</p>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Total Orders:</div>
          <p>{userData.ordersCount}</p>
        </div>
        {/* Add more user information as needed */}
      </div>
    </div>
  );
};

export default Profile;
