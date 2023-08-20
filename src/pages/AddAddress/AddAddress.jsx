import { useEffect, useState } from "react";
// import { divisions, districts, subDistricts, unions } from "./locationData";
const AddDeliveryAddressForm = () => {
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



  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    division: "",
    district: "",
    subDistrict: "",
    union: "",
    houseNo: "",
    area: "",
    streetAddress: "",
    postalCode: "",
  });
  // console.log(formData);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold mb-4">Add Delivery Address</h1>
      <form className="bg-white p-6 rounded shadow-xl" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter your full name"
            required
          />
        </div>
        {/* Contact Number */}
        <div className="mb-4">
          <label className="block mb-1">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter your contact number"
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
          <label className="block mb-1">House/Holding No</label>
          <input
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter house/holding number"
            required
          />
        </div>
        {/* Area */}
        <div className="mb-4">
          <label className="block mb-1">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter area"
            required
          />
        </div>
        {/* Street Address */}
        <div className="mb-4">
          <label className="block mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter street address"
            required
          />
        </div>
        {/* Postal Code */}
        <div className="mb-4">
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md"
            placeholder="Enter postal code"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-MainColor shadow-sm text-CardColor py-2 px-4 rounded hover:bg-MainColorHover"
          >
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDeliveryAddressForm;
