import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";
import { postApi } from "../../apis";
import Swal from "sweetalert2";

const initialFormState = {
  title: "",
  description: "",
  name: "",
  phone: "",
  email: "",
 
};

const Support = () => {
  const [formData, setFormData] = useState(initialFormState);
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
    postApi("/support/create", formData, null)
      .then(() => {
        setSent(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message Sent. Thanks For Your Feedback!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setSent(false);
        console.error(error.response.data.message);
      });

    // const templateParams = {
    //   from_name: formData.name,
    //   user_email: formData.email,
    //   message: formData.description,
    // };

    // emailjs
    //   .send(
    //     "service_qeov5k3",
    //     "template_7gm40zm",
    //     templateParams,
    //     "1tcM1ckhC1nBgyawA"
    //   )
    //   .then((result) => {
    //     console.log(result.text);
    //     setFormData({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //     alert("Message Sent. Thanks For Your Feedback!");
    //     setSent(false);
    //   })
    //   .catch((error) => {
    //     setSent(false);
    //     console.error(error.text);
    //   });

    setFormData(initialFormState);
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
              <AiOutlinePhone className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">+8801713-337752</p>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">banglamartecommerce@gmail.com</p>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">
                Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur
              </p>
            </div>
            <div className="mt-6 lg:mt-10">
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
              <AiOutlinePhone className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">+8809611677639</p>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <AiOutlineMail className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">banglamartecommerce@gmail.com</p>
            </div>
            <div className="flex items-center mb-2 text-blue-900">
              <BiCurrentLocation className=" mr-2 text-SubTextColor" />
              <p className="text-SubTextColor">
                House 381, Level-5, Road- 28, New DOSH, Mohakhali, Dhaka- 1206
              </p>
            </div>
            <div className="mt-6 lg:mt-10">
              {/* Send us a message section */}
              <h1 className=" mb-4 text-SubTextColor">Send us message</h1>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="bg-BackgroundColor rounded-md w-full p-2 mb-4"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
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
