// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import { useSelector } from "react-redux";

// const SignUp = () => {
//   const { createUser } = useContext(AuthContext);
//   const [errorMessage, setErrorMessage] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const [isLoading, setIsLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [division, setDivision] = useState("");
//   const [district, setDistrict] = useState("");
//   const [upazila, setUpazila] = useState("");
//   const [union, setUnion] = useState("");
//   const [street, setStreet] = useState("");
//   const [birthday, setBirthday] = useState("");
//   const [gender, setGender] = useState("");
//   const [selectedDivision, setSelectedDivision] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
//   const [selectedUnion, setSelectedUnion] = useState("");
//   const [divisions, setDivisions] = useState(
//     useSelector((state) => state.divisions.divisions)
//   );
//   const [districts, setDistricts] = useState(
//     useSelector((state) => state.districts.districts)
//   );
//   const [subDistricts, setSubDistricts] = useState(
//     useSelector((state) => state.upazilas.upazilas)
//   );
//   const [unions, setUnions] = useState(useSelector((state) => state.unions.unions));

//   const handleDivisionChange = (event) => {
//     const divisionId = event.target.value;
//     setSelectedDivision(divisionId);
//     setSelectedDistrict("");
//     setSelectedSubDistrict("");
//     setSelectedUnion("");

//     const selectedDivisionData = divisions.find(
//       (division) => division.id == divisionId
//     );
//     setDivision(selectedDivisionData.name);
//   };
//   const handleDistrictChange = (event) => {
//     const districtId = event.target.value;
//     setSelectedDistrict(districtId);
//     setSelectedSubDistrict("");
//     setSelectedUnion("");

//     const selectedDistrictObject = districts.find(
//       (district) => district.id == districtId
//     );

//     setDistrict(selectedDistrictObject.name);
//   };

//   const handleSubDistrictChange = (event) => {
//     const subDistrictId = event.target.value;
//     setSelectedSubDistrict(subDistrictId);
//     setSelectedUnion("");

//     const filteredSubDistrictsData = subDistricts.filter(
//       (subDistrict) => subDistrict.id == subDistrictId
//     );
//     // console.log(filteredSubDistrictsData[0]);
//     setUpazila(filteredSubDistrictsData[0].name);
//   };

//   const handleUnionChange = (event) => {
//     const unionId = event.target.value;
//     setSelectedUnion(unionId);

//     const filteredUnionsData = unions.filter((union) => union.id == unionId);

//     setUnion(filteredUnionsData[0].name)
//   };

//   const filteredDistricts = districts.filter(
//     (district) => district.divisionId == selectedDivision
//   );

//   const filteredSubDistricts = subDistricts.filter(
//     (subDistrict) => subDistrict.districtId == selectedDistrict
//   );
//   const filteredUnions = unions.filter(
//     (union) => union.subDistrictId == selectedSubDistrict
//   );

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/;

//     if (
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password === "" ||
//       confirmPassword === ""
//     ) {
//       // Empty fields error
//       setErrorMessage("All fields are required");
//     } else if (password.length < 6) {
//       // Password length error
//       setErrorMessage("Password must be at least 6 characters long");
//     } else if (!passwordRegex.test(password)) {
//       // Password requirements error
//       setErrorMessage(
//         "Password must contain at least one capital letter, one special character, and one digit"
//       );
//     } else if (password !== confirmPassword) {
//       // Password mismatch error
//       setErrorMessage("Passwords do not match");
//     } else {
//       // const info = { displayName: name, photoURL: photoUrl };
//       // setIsLoading(true);
//       // createUser(email, password)
//       //   .then((result) => {
//       //     setErrorMessage("");
//       //     const user = result.user;
//       //     Swal.fire({
//       //       position: "top-end",
//       //       icon: "success",
//       //       title: "User created successfully.",
//       //       showConfirmButton: false,
//       //       timer: 1500,
//       //     });
//       //     setIsLoading(false);
//       //     navigate(from, { replace: true });
//       //   })
//       //   .catch((error) => {
//       //     setIsLoading(false);
//       //     setErrorMessage(error.message);
//       //   });

//       const formData = {
//         name,
//         phone,
//         email,
//         password,
//         address: {
//           country,
//           division,
//           district,
//           upazila,
//           union,
//           street,
//         },
//         birthday,
//         gender,
//       };

//       console.log("Form Data:", formData);

//     }
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-xl p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Registration
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block font-medium mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="input input-bordered w-full"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block font-medium mb-2">
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               className="input input-bordered w-full"
//               placeholder="Enter your phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="input input-bordered w-full"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="input input-bordered w-full"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block font-medium mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="input input-bordered w-full"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="country" className="block font-medium mb-2">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               className="input input-bordered w-full"
//               placeholder="Enter your country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-4">
//             <label className="block mb-1">Division</label>
//             <select
//               required
//               value={selectedDivision}
//               onChange={handleDivisionChange}
//               className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
//             >
//               <option value="">Select Division</option>
//               {divisions.map((division) => (
//                 <option key={division.id} value={division.id}>
//                   {division.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="relative mb-4">
//             <label className="block mb-1">District</label>
//             <select
//               required
//               value={selectedDistrict}
//               onChange={handleDistrictChange}
//               className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
//             >
//               <option value="">Select District</option>
//               {filteredDistricts.map((district) => (
//                 <option key={district.id} value={district.id}>
//                   {district.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="relative mb-4">
//             <label className="block mb-1">Sub Districts</label>
//             <select
//               required
//               value={selectedSubDistrict}
//               onChange={handleSubDistrictChange}
//               className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
//             >
//               <option value="">Select Sub-district</option>
//               {filteredSubDistricts.map((subDistrict) => (
//                 <option key={subDistrict.id} value={subDistrict.id}>
//                   {subDistrict.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="relative mb-4">
//             <label className="block mb-1">Union</label>
//             <select
//               required
//               value={selectedUnion}
//               onChange={handleUnionChange}
//               className="w-full p-2 rounded focus:outline-none focus:border focus:border-BorderColor shadow-md pr-10"
//             >
//               <option value="">Select Union</option>
//               {filteredUnions.map((union) => (
//                 <option key={union.id} value={union.id}>
//                   {union.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="street" className="block font-medium mb-2">
//               Street
//             </label>
//             <input
//               type="text"
//               id="street"
//               className="input input-bordered w-full"
//               placeholder="Enter your street"
//               value={street}
//               onChange={(e) => setStreet(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="birthday" className="block font-medium mb-2">
//               Birthday
//             </label>
//             <input
//               type="date"
//               id="birthday"
//               className="input input-bordered w-full"
//               value={birthday}
//               onChange={(e) => setBirthday(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="gender" className="block font-medium mb-2">
//               Gender
//             </label>
//             <select
//               id="gender"
//               className="input input-bordered w-full"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           {errorMessage && (
//           <div
//             className="bg-[#fdd5d5] border-l-4 border-[#ff8383] text-[#ff2b2b] p-4 mb-4"
//             role="alert"
//           >
//             <p>{errorMessage}</p>
//           </div>
//         )}
//           <motion.button
// whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.8 }}
//             type="submit"
//             className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <span className="loading loading-bars loading-md"></span>
//             ) : (
//               "Register"
//             )}
//           </motion.button>
//           <p className="mt-4 text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-MainColor hover:text-MainColorHover hover:underline">
//               <h3>Login here</h3>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillPhone, AiOutlineGoogle } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const SignUp = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [isPhoneSelected, setIsPhoneSelected] = useState(false);

  const handleSubmit = (event) => {
    setErrorMessage("");
    event.preventDefault();
    const form = event.target;
    // const identifier = isPhoneSelected
    //   ? form.phoneNumber.value
    //   : form.email.value;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      // Empty fields error
      setErrorMessage("All fields are required");
    } else if (password.length < 6) {
      // Password length error
      setErrorMessage("Password must be at least 6 characters long");
    } else if (!passwordRegex.test(password)) {
      // Password requirements error
      setErrorMessage(
        "Password must contain at least one capital letter, one special character, and one digit"
      );
    } else if (password !== confirmPassword) {
      // Password mismatch error
      setErrorMessage("Passwords do not match");
    } else {
      // const info = { displayName: name, photoURL: photoUrl };
      // setIsLoading(true);
      // createUser(email, password)
      //   .then((result) => {
      //     setErrorMessage("");
      //     const user = result.user;
      //     Swal.fire({
      //       position: "top-end",
      //       icon: "success",
      //       title: "User created successfully.",
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     setIsLoading(false);
      //     navigate(from, { replace: true });
      //   })
      //   .catch((error) => {
      //     setIsLoading(false);
      //     setErrorMessage(error.message);
      //   });
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);

    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };
  const handlePhoneLogin = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Helmet>
        <title>Sign Up | Banglamart E-commerce</title>
      </Helmet>
      <div className="w-full max-w-md p-6 bg-BackgroundColor rounded-md shadow-lg m-4 ld:m-0">
        <h2 className="text-2xl font-semibold text-center mb-6">SignUp</h2>
        {errorMessage && (
          <div
            className="bg-[#fdd5d5] border-l-4 border-[#ff8383] text-[#ff2b2b] p-4 mb-4"
            role="alert"
          >
            <p>{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-2 relative">
            <label className="block font-medium mb-2 text-TextColor">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your Name"
              required
            />
          </div>
          <label className="block font-medium mb-2 text-TextColor">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full pr-10 mb-4"
            placeholder="Enter your Email Address"
            required
          />
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered w-full"
              placeholder="Confirm your password"
              name="confirmPassword"
              required
            />
          </div>
          <div className="mb-2 text-right">
            <Link
              to="/forgot-password"
              className="text-MainColor hover:text-MainColorHover hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
            className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-bars loading-md"></span>
            ) : (
              "Register"
            )}
          </motion.button>
        </form>
        <div className="text-center">
          <div className="divider text-SubTextColor">OR</div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleGoogleLogin}
            className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover mb-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-bars loading-md"></span>
            ) : (
              <div className="flex justify-center items-center">
                <AiOutlineGoogle className="text-2xl mr-1" />
                <h2>Sign in with Google</h2>
              </div>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={handlePhoneLogin}
            className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-bars loading-md"></span>
            ) : (
              <div className="flex justify-center items-center">
                <AiFillPhone className="text-2xl mr-1" />
                <h2>Sign in with Phone</h2>
              </div>
            )}
          </motion.button>
          <p className="mt-10 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-MainColor hover:text-MainColorHover hover:underline"
            >
              <h3>Login here</h3>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
