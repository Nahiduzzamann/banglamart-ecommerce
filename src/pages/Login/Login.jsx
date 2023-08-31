import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {
  AiFillPhone,
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
  // const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const identifier = isPhoneSelected
    //   ? form.phoneNumber.value
    //   : form.email.value;
    const email=form.email.value
    const password = form.password.value;

    setIsLoading(true);
console.log(email,password);
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
  const handlePhoneLogin =() => {}

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
        <label className="block font-medium mb-2 text-TextColor">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full pr-10 mb-4"
              placeholder="Enter your Email Address"
              required
            />
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
            <button
              type="button"
              className="absolute right-3 top-14 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
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
            className="bg-MainColor mt-4 text-CardColor shadow-lg shadow-MainColorHover rounded-md p-2 w-full hover:bg-MainColorHover"
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
          <p className="mt-10 text-SubTextColor">
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
