import { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import { postApi } from "../../apis";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUpWithPhone = () => {
  const { setUserState } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isCountdownCompleted, setIsCountdownCompleted] = useState(true);
  const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false);
  const [isReSendButtonEnabled, setIsReSendButtonEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to send OTP
  const sendOtp = () => {
    setErrorMessage(null)
    setIsLoading(true);
    postApi("/auth/send-otp", { phone: phoneNumber }, null)
      .then((response) => {
        localStorage.setItem("otpToken", response.data.token);
        setIsOtpSent(true);
        setIsLoading(false);
        setIsReSendButtonEnabled(true)
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };
  const handlePhoneLogin = () => {
    setErrorMessage(null)
    setIsLoading(true);
    const token = localStorage.getItem("otpToken");
    postApi(
      "/auth/sign-up-with-phone",
      {
        name: name,
        password: password,
        token: token,
      },
      null
    )
      .then((response) => {
        localStorage.removeItem("otpToken");
        localStorage.setItem("token", response.data.token);
        setUserState(response.data.user.createdAt);
        setIsLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  // Function to verify OTP
  const verifyOtp = () => {
    setErrorMessage(null)
    setIsLoading(true);
    const token = localStorage.getItem("otpToken");
    postApi("/auth/verify-otp", { token: token, otp: otp }, null)
      .then((response) => {
        localStorage.removeItem("otpToken");
        localStorage.setItem("otpToken", response.data.token);
        setIsLoading(false);
        handlePhoneLogin();
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  // Countdown completion handler
  const handleCountdownComplete = () => {
    setIsCountdownCompleted(true);
  };
  const handleOtpResent = () => {
    sendOtp();
  };

  useEffect(() => {
    setIsSendButtonEnabled(!!phoneNumber.trim());
  }, [phoneNumber]);

  useEffect(() => {
    if (!isCountdownCompleted) {
      // Start the countdown timer for 1 minute (60000 milliseconds)
      const timer = setTimeout(handleCountdownComplete, 60000);
      return () => clearTimeout(timer);
    }
  }, [isCountdownCompleted]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Sign Up with Phone</h1>
      <div className="mb-4">
        <input
          required
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md mb-2 p-2 w-full outline-none shadow focus:shadow-SubTextColor"
        />

        <input
          required
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="rounded-md p-2 w-full outline-none shadow focus:shadow-SubTextColor"
        />
      </div>
      <input
        required
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md p-2 w-full outline-none shadow focus:shadow-SubTextColor"
      />
      {isOtpSent ? (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ) : null}
      {errorMessage && (
        <div
          className="bg-[#fdd5d5] border-l-4 border-[#ff8383] text-[#ff2b2b] p-4 mb-4"
          role="alert"
        >
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="mb-4 mt-4">
        {isOtpSent ? (
          <button
            onClick={verifyOtp}
            className="bg-MainColor text-CardColor rounded-md p-2 w-28"
          >
            {isLoading ? (
              <span className="loading loading-bars loading-xs"></span>
            ) : (
              "Verify OTP"
            )}
          </button>
        ) : (
          <button
            disabled={!isSendButtonEnabled}
            onClick={sendOtp}
            className="bg-MainColor text-CardColor rounded-md p-2 w-28"
          >
            {isLoading ? (
              <span className="loading loading-bars loading-xs"></span>
            ) : (
              "Send OTP"
            )}
          </button>
        )}
      </div>
      {!isCountdownCompleted ? (
        <div className="text-red-500">
          Resend OTP in{" "}
          <Countdown
            date={Date.now() + 60000}
            onComplete={handleCountdownComplete}
          />
        </div>
      ) : (
        <div>
          <button
          disabled={!isReSendButtonEnabled}
            onClick={() => {
              setIsOtpSent(false);
              setIsCountdownCompleted(false);
              handleOtpResent();
            }}
            className="bg-MainColor text-CardColor rounded-md p-2 w-28"
          >
            Resend OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpWithPhone;