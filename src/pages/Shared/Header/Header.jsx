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
import { Link } from "react-router-dom";

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
      <div className="bg-CardColor border-b-[1px] border-b-BorderColor">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <LanguageToggle></LanguageToggle>
            </div>
            <div className="flex items-center">
              <AiFillPhone className=" hidden lg:block text-SubTextColor" />
              <p className="mr-4 hidden lg:block text-SubTextColor">
                {t("header.number")}
              </p>
              <Link>
              <p className="mr-4 text-SubTextColor hover:text-TextColor">{t("header.login")}</p>
              </Link>
              <Link><p className="text-SubTextColor hover:text-TextColor">{t("header.registration")}</p></Link>
            </div>
          </div>
        </div>
      </div>
      {/* search logo section  */}
      <div className="bg-CardColor border-b-[1px] border-b-BorderColor">
        <div className="container mx-auto">
          <div className="flex justify-between p-1">
            <div className="bg-black rounded-full">
              <img
                className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 "
                src="https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <AiOutlineSearch className="text-[30px] md:hidden text-SubTextColor hover:text-TextColor" />
              <div className="relative mx-auto max-w-md hidden md:block">
                <input
                  className="w-full pl-4 pr-4 py-2 rounded-lg border border-SubTextColor focus:outline-none focus:border-MainColor"
                  type="text"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 pl-3 pr-3 flex items-center justify-center pointer-events-none bg-MainColor rounded-e-lg hover:bg-MainColor">
                  <AiOutlineSearch className="text-CardColor text-[25px]" />
                </div>
              </div>
              <button className="flex items-center ml-5 relative">
                <AiOutlineHeart className="text-[30px] text-SubTextColor" />
                <div className="">
                  <div className="absolute flex justify-center right-[68px] -top-2 text-[10px] bg-MainColor text-CardColor rounded-full h-5 w-5 items-center">
                    10
                  </div>
                  <p className=" text-SubTextColor">Wishlist</p>
                </div>
              </button>
              <button className="flex items-center ml-5 relative">
                <AiOutlineShoppingCart className="text-[30px] text-SubTextColor" />
                <div>
                <div className="absolute flex justify-center right-[45px] -top-2 text-[10px] bg-MainColor text-CardColor rounded-full h-5 w-5 items-center">
                    10
                  </div>
                  <p className="text-sm text-SubTextColor">Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* navigation section  */}
      <div className="bg-CardColor p-1">
        <div className="container mx-auto">
        <div className="flex justify-around">
        <Link className="" to='/'>
        Flash Sale
        </Link>
        <Link>
        Be A Seller
        </Link>
        <Link>
        Best Sellers
        </Link>
        <Link>
        Affiliating
        </Link>
        <Link>
        Categories
        </Link>
        <Link>
        Brands
        </Link>
        <Link>
        Track Order
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
