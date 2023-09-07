import { Avatar, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useContext } from "react";
import {
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaEnvelopeOpenText,
  FaGenderless,
  FaUserAstronaut,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-4 bg-BackgroundColor flex items-center justify-center">
      {user ? (
        <div className="bg-CardColor shadow-md rounded-lg w-full md:w-1/2 lg:w-1/3 p-4 text-SubTextColor">
          <div className="text-center">
            <Avatar size="xl" name={user?.name} src={user?.image} />
            <h1 className="text-2xl font-semibold">
              {user.name || "Please Update Your Profile"}
            </h1>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <FaUserAstronaut className="mr-2" />
              <span>{user.name || "Please Update Your Profile"}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelopeOpenText className="mr-2" />
              <span>{user.email || "Please Update Your Profile"}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <span>{user.phone || "Please add your number"}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaBirthdayCake className="mr-2" />
              <span>{user.birthday || "Please Update Your Profile"}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaGenderless className="mr-2" />
              <span>{user.gender || "Please Update Your Profile"}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>{`${
                user.address.subDistrict || "Please Update Your Profile"
              }, ${user.address.district || "Please Update Your Profile"}, ${
                user.address.division || "Please Update Your Profile"
              }`}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              className="bg-MainColor text-CardColor py-2 px-4 rounded-md mt-4 hover:bg-MainColorHover shadow-md shadow-MainColor "
              to="/addDeliveryAddress"
            >
              Update Profile
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        </div>
      )}
    </div>
  );
};

export default Profile;
