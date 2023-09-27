import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillPhone, AiOutlineGoogle } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { postApi } from "../../apis";

const SignUp = () => {
  const { signInWithGoogle, createUser, setUserState } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const saveToken = (t) => {
    localStorage.removeItem("token");

    localStorage.setItem("token", t);
  };

  const handleSubmit = async (event) => {
    setErrorMessage("");
    event.preventDefault();
    const form = event.target;
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
      setIsLoading(true);
      createUser("/auth/signUp", formData, null)
        .then((res) => {
          saveToken(res.data.token);
          setIsLoading(false);
          setUserState(67);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.response.data.message);
        });
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);

    try {
      const res = await signInWithGoogle();
      // console.log(res.user);
      postApi(
        "/auth/thirdPartySignIn",
        {
          uid: res.user.uid,
          name: res.user.displayName,
          phone: res.user.phoneNumber,
          email: res.user.email,
        },
        null
      )
        .then((res) => {
          saveToken(res.data.token);
          setIsLoading(false);
          setUserState(887);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LogIn Successful.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.response.data.message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlePhoneLogin = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Helmet>
        <title>Sign Up | Banglamart E-commerce</title>
      </Helmet>
      <div className="w-full max-w-md p-6 bg-BackgroundColor rounded-md shadow-lg m-4 ld:m-0">
        <h2 className="text-2xl font-semibold text-center mb-6">SignUp</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2 relative">
            <label className="block font-medium mb-2 text-SubTextColor">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <label className="block font-medium mb-2 text-SubTextColor">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full pr-10 mb-4"
            placeholder="Enter your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium mb-2 text-SubTextColor"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block font-medium mb-2 text-SubTextColor"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered w-full"
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && (
            <div
              className="bg-[#fdd5d5] border-l-4 border-[#ff8383] text-[#ff2b2b] p-4 mb-4"
              role="alert"
            >
              <p>{errorMessage}</p>
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
            className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover mt-1"
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
                <h2>Sign Up with Google</h2>
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
                <h2>Sign Up with Phone</h2>
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
