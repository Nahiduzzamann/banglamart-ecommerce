import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const identifier = isPhoneSelected
      ? form.phoneNumber.value
      : form.email.value;
    const password = form.password.value;
    setIsLoading(true);

    // signIn(identifier, password)
    //   .then((result) => {
    //     const user = result.user;
    //     navigate(from, { replace: true });
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setErrorMessage(error.message);
    //     setIsLoading(false);
    //   });
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);

    signInWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Helmet>
        <title>Login | Banglamart E-commerce</title>
      </Helmet>
      <div className="w-full max-w-md p-6 bg-BackgroundColor rounded-md shadow-lg m-4 ld:m-0">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {errorMessage && (
          <div
            className="bg-[#fdd5d5] border-l-4 border-[#ff8383] text-[#ff2b2b] p-4 mb-4"
            role="alert"
          >
            <p>{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex flex-col ">
              <label className="block font-medium mb-2 ">Login Using</label>
              <label className=" cursor-pointer text-[14px] text-SubTextColor">
                <input
                  type="radio"
                  name="loginType"
                  value="email"
                  checked={!isPhoneSelected}
                  onChange={() => setIsPhoneSelected(false)}
                />{" "}
                Email
              </label>
              <label className="cursor-pointer  text-[14px] text-SubTextColor">
                <input
                  type="radio"
                  name="loginType"
                  value="phone"
                  checked={isPhoneSelected}
                  onChange={() => setIsPhoneSelected(true)}
                />{" "}
                Phone Number
              </label>
            </div>
            {isPhoneSelected ? (
              <input
                type="text"
                name="phoneNumber"
                className="input input-bordered w-full"
                placeholder="Enter your phone number"
                required
              />
            ) : (
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            )}
          </div>
          <div className="mb-2 relative">
            <label className="block font-medium mb-2 text-TextColor">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your password"
              required
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              type="button"
              className="absolute right-3 top-14 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </motion.button>
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
              "Log in"
            )}
          </motion.button>
        </form>
        <div className="text-center">
          <div className="divider text-SubTextColor">OR</div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleGoogleLogin}
            className="bg-MainColor text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover"
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
          <p className="mt-4 text-SubTextColor">
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="text-MainColor hover:text-MainColorHover hover:underline"
            >
              <h3>Register here</h3>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
