import { Avatar } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto bg-CardColor mt-4 lg:mt-10 lg:p-10">
      <div className="flex flex-col items-center p-4">
        <div className="relative">
          <Avatar size="xl" name={user?.name} src={user?.image} />
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Name:</label>
          <input
            disabled
            type="text"
            value={user?.displayName || user?.name}
            className="bg-BackgroundColor outline-BorderColor lg:w-96 p-2 rounded-md text-SubTextColor "
          />
        </div>
        <div className="mt-4">
          <label className="text-SubTextColor mr-2">Email:</label>
          <input
            disabled
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
          to="/addDeliveryAddress"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
