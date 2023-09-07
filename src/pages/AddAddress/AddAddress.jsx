import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { AuthContext } from "../../providers/AuthProvider";
import { Avatar } from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";

const AddDeliveryAddressForm = () => {
  const { user, setUserState } = useContext(AuthContext);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);
  const [unions, setUnions] = useState([]);
  useEffect(() => {
    const fetchDivisionsData = async () => {
      try {
        const response = await fetch("divisions.json");
        const data = await response.json();
        setDivisions(data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchDivisionsData();
  }, []);

  useEffect(() => {
    const fetchDistrictsData = async () => {
      try {
        const response = await fetch("districts.json");
        const data = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchDistrictsData();
  }, []);

  useEffect(() => {
    const fetchSubDistrictsData = async () => {
      try {
        const response = await fetch("subDistricts.json");
        const data = await response.json();
        setSubDistricts(data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchSubDistrictsData();
  }, []);

  useEffect(() => {
    const fetchUnionsData = async () => {
      try {
        const response = await fetch("unions.json");
        const data = await response.json();
        setUnions(data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchUnionsData();
  }, []);
  // console.log(districts);

  const [formData, setFormData] = useState(null);
  //   {
  //   name: "",
  //   address:{
  //     country:"",
  //     division:"",
  //     district:"",
  //     upazila:"",
  //     street:""
  //   },
  //   gender:"",
  //   birthday:"",
  //   image:""
  // }
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedUnion, setSelectedUnion] = useState("");

  const handleDivisionChange = (event) => {
    const divisionId = event.target.value;
    setSelectedDivision(divisionId);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedUnion("");

    const selectedDivisionData = divisions.find(
      (division) => division.id == divisionId
    );
    setFormData((prevData) => ({
      ...prevData,
      division: selectedDivisionData.name,
    }));
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);
    setSelectedSubDistrict("");
    setSelectedUnion("");

    const selectedDistrictObject = districts.find(
      (district) => district.id == districtId
    );
    // console.log(selectedDistrictObject.name);
    setFormData((prevData) => ({
      ...prevData,
      district: selectedDistrictObject.name,
    }));
  };

  const handleSubDistrictChange = (event) => {
    const subDistrictId = event.target.value;
    setSelectedSubDistrict(subDistrictId);
    setSelectedUnion("");

    const filteredSubDistrictsData = subDistricts.filter(
      (subDistrict) => subDistrict.id == subDistrictId
    );
    // console.log(filteredSubDistrictsData[0]);

    setFormData((prevData) => ({
      ...prevData,
      subDistrict: filteredSubDistrictsData[0].name,
    }));
  };

  const handleUnionChange = (event) => {
    const unionId = event.target.value;
    setSelectedUnion(unionId);

    const filteredUnionsData = unions.filter((union) => union.id == unionId);
    //   console.log(filteredUnionsData);
    setFormData((prevData) => ({
      ...prevData,
      union: filteredUnionsData[0].name,
    }));
  };

  const filteredDistricts = districts.filter(
    (district) => district.divisionId == selectedDivision
  );

  const filteredSubDistricts = subDistricts.filter(
    (subDistrict) => subDistrict.districtId == selectedDistrict
  );
  const filteredUnions = unions.filter(
    (union) => union.subDistrictId == selectedSubDistrict
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto p-4 lg:w-[800px]">
      <Helmet>
        <title>Add address | Banglamart E-commerce</title>
      </Helmet>
      <div className="">
        <h1 className="font-semibold mb-4">Update Your Profile</h1>
        <form
          className="bg-white p-6 rounded shadow-xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center">
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
          </div>
          
          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData?.name}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Division */}
          <div className="relative mb-4">
            <label className="block mb-1">Division</label>
            <select
              required
              value={selectedDivision}
              onChange={handleDivisionChange}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
            >
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative mb-4">
            <label className="block mb-1">District</label>
            <select
              required
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
            >
              <option value="">Select District</option>
              {filteredDistricts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <div className="relative mb-4">
            <label className="block mb-1">Sub Districts</label>
            <select
              required
              value={selectedSubDistrict}
              onChange={handleSubDistrictChange}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
            >
              <option value="">Select Sub-district</option>
              {filteredSubDistricts.map((subDistrict) => (
                <option key={subDistrict.id} value={subDistrict.id}>
                  {subDistrict.name}
                </option>
              ))}
            </select>
          </div>
          <div className="relative mb-4">
            <label className="block mb-1">Union</label>
            <select
              required
              value={selectedUnion}
              onChange={handleUnionChange}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
            >
              <option value="">Select Union</option>
              {filteredUnions.map((union) => (
                <option key={union.id} value={union.id}>
                  {union.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Gender</label>
            <div className="flex">
              <label className="mr-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData?.gender === "male"}
                  className="mr-1"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData?.gender === "female"}
                  className="mr-1"
                />
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Birth Date</label>
            <input
              type="date"
              name="date"
              value={formData?.birthday}
              className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
              placeholder="Enter postal code"
              
            />
          </div>
         
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              type="submit"
              className="bg-MainColor shadow-sm text-CardColor py-2 px-4 rounded hover:bg-MainColorHover"
            >
              Update Profile
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryAddressForm;
