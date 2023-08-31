import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [send, setSent] = useState(false);
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);
    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_qeov5k3",
        "template_7gm40zm",
        templateParams,
        "1tcM1ckhC1nBgyawA"
      )
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Message Sent. Thanks For Your Feedback!");
        setSent(false);
      })
      .catch((error) => {
        setSent(false);
        console.error(error.text);
      });
  };

  return (
    <div className="">
      <div className="container mx-auto p-4 mt-4 lg:mt-12 pb-12 bg-CardColor">
        <h4 className="text-2xl text-center font-bold mb-8 text-SubTextColor">
          Contact Us
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className=" mb-4 text-SubTextColor">Branch Office</h1>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlinePhone className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">+8801713-337752</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">
                banglamartecommerce@gmail.com
              </span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">
                Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur
              </span>
            </div>
            <div className="mt-6">
              <h1 className=" text-SubTextColor">Location</h1>
              <div className="mt-2">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4853462408682!2d89.22863257600258!3d25.754527808900363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3334011188799%3A0x41b90776fb5f041!2sSJS%20Kallyan%20Foundation!5e0!3m2!1sen!2sbd!4v1685954381956!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" mb-4 text-SubTextColor">Head Office</h1>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlinePhone className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">+8809611677639</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">
                banglamartecommerce@gmail.com
              </span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className="h-6 w-6 mr-2 text-SubTextColor" />
              <span className="text-SubTextColor">
                House 381, Level-5, Road- 28, New DOSH, Mohakhali, Dhaka- 1206
              </span>
            </div>
            <div className="mt-6">
              {/* Send us a message section */}
              <h1 className=" mb-4 text-SubTextColor">Send us message</h1>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4 "
                  rows="4"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  className="text-CardColor btn btn-info rounded"
                >
                  {send ? "Sending.." : "Send"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
