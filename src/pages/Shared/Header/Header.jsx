import { useState } from "react";
import {
  AiOutlineClose,
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import LanguageToggle from "../../../components/LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const handleCloseAdd = () => {
    setHide(true);
  };
  return (
    <div>
      {/* Add Section  */}
      <div
        className={`relative h-[35px] flex justify-end items-center ${
          hide && "hidden"
        }`}
      >
        <button className="absolute text-2xl mr-4" onClick={handleCloseAdd}>
          <AiOutlineClose />
        </button>
        <img
          className="h-[35px] w-full object-cover"
          src="https://banglamartecommerce.com/public/uploads/all/rD8sXSsY9A88MC4VkZcnlNtSckkDnycHQcWKqGhV.png"
        ></img>
      </div>
      {/* Log In Section  */}
      <div className="bg-white border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <LanguageToggle></LanguageToggle>
            </div>
            <div className="flex items-center">
              <AiFillPhone className=" hidden lg:block text-gray-600" />
              <p className="mr-4 hidden lg:block text-gray-600">
                {t("header.number")}
              </p>
              <p className="mr-4 text-gray-600">{t("header.login")}</p>
              <p className="text-gray-600">{t("header.registration")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* search logo section  */}
      <div className="bg-white border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between p-1">
            <div className="bg-black rounded-full">
              <img
                className="h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 "
                src="https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <AiOutlineSearch className="text-[35px] lg:hidden text-gray-600" />
              <div className="relative mx-auto max-w-md hidden lg:block">
                <input
                  className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 pl-3 pr-3 flex items-center justify-center pointer-events-none bg-indigo-500 rounded-e-lg hover:bg-indigo-200">
                  <AiOutlineSearch className="text-white text-[25px]" />
                </div>
              </div>
              <button className="flex items-center ml-2">
                <AiOutlineHeart className="text-[30px] text-gray-600" />
                <div className="">
                  <span className=" text-sm bg-indigo-500 text-white p-1 rounded-full">
                    0
                  </span>
                  <p className="text-sm text-gray-600">Wishlist</p>
                </div>
              </button>
              <button className="flex items-center ml-2">
                <AiOutlineShoppingCart className="text-[30px] text-gray-600" />
                <div>
                  <span className="text-sm bg-indigo-500 text-white p-1 rounded-full">
                    0
                  </span>
                  <p className="text-sm text-gray-600">Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
