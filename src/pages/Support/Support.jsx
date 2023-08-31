

import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    <div className="bg-gray-100">
      <div className="container mx-auto p-4 pt-12 pb-12">
        <h4 className="text-3xl text-center font-bold mb-8 text-orange-500">
          Contact Us
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#1A2753]">
              Branch Office
            </h4>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlinePhone className="h-6 w-6 mr-2 " />
              <span>+8801713-337752</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className="h-6 w-6 mr-2" />
              <span>prestigefeed.bd@gmail.com</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className="h-6 w-6 mr-2" />
              <span>
                Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-[#1A2753]">Location</h2>
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
            <h4 className="text-2xl font-bold mb-4 text-[#1A2753]">
              Head Office
            </h4>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlinePhone className="h-6 w-6 mr-2 " />
              <span>+8801713-337951</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className="h-6 w-6 mr-2" />
              <span>prestigefeed.bd@gmail.com</span>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className="h-6 w-6 mr-2" />
              <span>
                House 381, Level-5, Road- 28, New DOSH, Mohakhali, Dhaka- 1206
              </span>
            </div>
          </div>

          <div>
            {/* Send us a message section */}
            <h4 className="text-2xl font-bold mb-4 text-[#1A2753]">
              Send us a message
            </h4>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded-md w-full p-2 mb-4"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="border border-gray-300 rounded-md w-full p-2 mb-4 resize-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-[#493120] hover:bg-[#9E683E] text-white font-bold py-2 px-4 rounded"
              >
                {send ? "Sending.." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;