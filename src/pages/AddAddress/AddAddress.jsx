import { useEffect, useRef, useState } from "react";

const AddDeliveryAddressForm = () => {
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

  const [showDivisionDropdown, setShowDivisionDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const [showSubDistrictDropdown, setShowSubDistrictDropdown] = useState(false);
  const [showUnionDropdown, setShowUnionDropdown] = useState(false);

  const divisionInputRef = useRef(null);
  const districtInputRef = useRef(null);
  useEffect(() => {
    // Add event listener to document to handle clicks
    const handleDocumentClick = (event) => {
      if (
        divisionInputRef.current &&
        !divisionInputRef.current.contains(event.target)
      ) {
        // Click was outside of the input field, close the dropdown
        setShowDivisionDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  useEffect(() => {
    // Add event listener to document to handle clicks
    const handleDocumentClick = (event) => {
      if (
        districtInputRef.current &&
        !districtInputRef.current.contains(event.target)
      ) {
        // Click was outside of the input field, close the dropdown
        setShowDistrictDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal"];
  const districts = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Dinajpur",
  ];
  const subDistricts = ["Mirpur", "Gulshan", "Motijheel", "Badda", "Uttara"];
  const unions = ["Union 1", "Union 2", "Union 3", "Union 4", "Union 5"];

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold mb-4">Add Delivery Address</h1>
      <form className="bg-white p-6 rounded shadow-xl">
        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor"
            placeholder="Enter your full name"
            required
          />
        </div>
        {/* Contact Number */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Division */}
        <div className="relative mb-4">
          <label className="block font-semibold mb-1">Division</label>
          <input
            ref={divisionInputRef}
            type="text"
            name="division"
            value={formData.division}
            onChange={handleInputChange}
            className="w-full p-2 rounded pr-10 focus:border"
            placeholder="Select division"
            onClick={() => setShowDivisionDropdown(!showDivisionDropdown)}
            readOnly
            required
          />
          {/* Division dropdown content */}
          {showDivisionDropdown && (
            <ul className="absolute bg-BackgroundColor rounded mt-2 py-1 w-full shadow-xl z-10">
              {divisions.map((division, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:shadow-md"
                  onClick={() => {
                    setFormData((prevData) => ({ ...prevData, division }));
                    setShowDivisionDropdown(false);
                  }}
                >
                  {division}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative mb-4">
          <label className="block font-semibold mb-1">District</label>
          <input
            ref={districtInputRef}
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full p-2 rounded pr-10 focus:border"
            placeholder="Select district"
            onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
            readOnly
            required
          />
          {/* Division dropdown content */}
          {showDistrictDropdown && (
            <ul className="absolute bg-BackgroundColor rounded mt-2 py-1 w-full shadow-xl">
              {districts.map((district, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:shadow-md"
                  onClick={() => {
                    setFormData((prevData) => ({ ...prevData, district }));
                    setShowDistrictDropdown(false);
                  }}
                >
                  {district}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Similar structure for District, Sub-district, and Union fields */}
        {/* House/holding No */}

        <div className="mb-4">
          <label className="block font-semibold mb-1">House/Holding No</label>
          <input
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            placeholder="Enter house/holding number"
            required
          />
        </div>
        {/* Area */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            placeholder="Enter area"
            required
          />
        </div>
        {/* Street Address */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
            placeholder="Enter street address"
            required
          />
        </div>
        {/* Postal Code */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="w-full p-2 rounded"
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
