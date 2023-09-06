import { Avatar } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
 
  const [editedImage, setEditedImage] = useState(null);
  // Add more states for other user data fields as needed

  

  // Profile picture upload handler
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload here and set the editedImage state
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    // Handle file upload here, e.g., using FormData and API request
    // For now, just update the local state
  };

  return (
    <div className="container mx-auto bg-CardColor mt-4 lg:mt-10 lg:p-10">
      <div className="flex flex-col items-center p-4">
        <div className="relative">
          <Avatar
            size="xl"
            name={user?.displayName || user?.name}
            src={user?.photoURL || user?.image}
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
            className="absolute bottom-1 right-2 bg-TextColor text-CardColor rounded-full p-1 cursor-pointer hover:border hover:border-BorderColor border-2 border-CardColor"
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
            value={user?.displayName || user?.name}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor "
          />
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Email:</label>
          <input
            type="email"
            value={user?.email || user?.email}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor"
          />
        </div>
        {/* <div className="mt-4">
          <label className="text-SubTextColor mr-2">Phone:</label>
          <input
            type="number"
            value={user?.phoneNumber || user?.phone}
            onChange={(e) => setEditedPhone(e.target.value)}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor"
          />
        </div> */}
       
          <Link
            className="bg-MainColor text-CardColor py-2 px-4 rounded-md mt-4 hover:bg-MainColorHover shadow-md shadow-MainColor "
            to='/addDeliveryAddress'
          >
            Update Profile
          </Link>
        
      </div>
    </div>
  );
};

export default Profile;
