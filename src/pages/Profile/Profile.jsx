import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "react-scroll";

const Profile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "01750666272",
    image: "",
  });

  // State for editable fields
  const [editedName, setEditedName] = useState(userData.name);
  const [editedEmail, setEditedEmail] = useState(userData.email);
  const [editedPhone, setEditedPhone] = useState(userData.phone);
  const [editedImage, setEditedImage] = useState(userData.image);
  // Add more states for other user data fields as needed

  const handleUpdate = () => {
    // Perform API request to update user data
    // For now, just update the local state
    setUserData({
      ...userData,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
      image: editedImage,
      // Update other user data fields here
    });
  };

  // Profile picture upload handler
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    setEditedImage(file);
    // Handle file upload here, e.g., using FormData and API request
    // For now, just update the local state
  };

  return (
    <div className="container mx-auto bg-CardColor mt-4 lg:mt-10 lg:p-10">
      <div className="flex flex-col items-center p-4">
        <div className="relative">
          <Avatar
            size="xl"
            name={editedName}
            src={editedImage}
            onClick={() => {
              // Trigger the file input click
              document.getElementById("profile-picture-input").click();
            }}
          />
          <input
            type="file"
            id="profile-picture-input"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureUpload}
          />
          <label
            htmlFor="profile-picture-input"
            className="absolute bottom-1 right-2 bg-TextColor text-CardColor rounded-full p-1 cursor-pointer hover:border hover:border-BorderColor"
          >
            <p>
              <FaUserEdit />
            </p>
          </label>
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Name:</label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor "
          />
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Email:</label>
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor"
          />
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Phone:</label>
          <input
            type="number"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor"
          />
        </div>
        {editedName === userData.name &&
        editedEmail === userData.email &&
        editedPhone === userData.phone ? (
          <button
            disabled
            className="bg-BackgroundColor text-SubTextColor py-2 px-4 rounded-md mt-4 shadow-md shadow-SubTextColor"
          >
            {" "}
            Update
          </button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-MainColor text-CardColor py-2 px-4 rounded-md mt-4 hover:bg-MainColorHover shadow-md shadow-MainColor "
            onClick={handleUpdate}
          >
            Update
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Profile;
