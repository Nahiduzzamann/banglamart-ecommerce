import { useState } from "react";
import {
  AiOutlineClose,
  AiFillPhone,
  AiOutlineSearch,
  // AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import LanguageToggle from "../../../components/LanguageToggle";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Burger from "./Nav/Burger";

const Header = () => {
  const user = false;
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const handleCloseAdd = () => {
    setHide(true);
  };

  return (
    <div className="shadow-lg ">
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
          src="https://www.pngkit.com/png/full/282-2825717_special-offer-banner-blue-special-offer-banner.png"
        ></img>
      </div>
      <div className="">
        {/* number Section  */}
        <div className="bg-CardColor border-b-[1px] border-b-BorderColor p-1 hidden md:block">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="">
                <LanguageToggle></LanguageToggle>
              </div>
              <div className="flex items-center">
                <AiFillPhone className=" text-SubTextColor" />
                <p className="mr-1 lg:mr-0 text-SubTextColor">
                  {t("header.number")}
                </p>
                {/* <Link to="/login">
                  <p className="mr-4 text-SubTextColor hover:text-TextColor">
                    {t("header.login")}
                  </p>
                </Link>
                <Link to="registration">
                  <p className="text-SubTextColor hover:text-TextColor">
                    {t("header.registration")}
                  </p>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        {/* search logo section  */}
        <div className="bg-CardColor border-b-[1px] border-b-BorderColor">
          <div className="container mx-auto">
            <div className="flex justify-between items-center p-1">
              <div className="rounded-full flex items-center justify-center h-16 w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24">
                <Link to="/">
                  <img
                    className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 "
                    src="https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                    alt=""
                  />
                </Link>
              </div>
              {/* search  */}
              <div className="relative xl:w-[600px] lg:w-[500px] md:w-[400px] w-full mr-2 md:mr-0 ml-2 md:ml-0 rounded-full shadow-sm shadow-[#b6b6b6]">
                <input
                  className="w-full pl-4 pr-4 py-2 rounded-full focus:outline-none focus:border-MainColor"
                  type="text"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 pl-3 pr-3 flex items-center justify-center bg-MainColor rounded-e-lg hover:bg-MainColor rounded-r-full">
                  <button className=""><AiOutlineSearch className="text-CardColor text-[25px]  hover:text-[27px]" /></button>
                </div>
              </div>
              {/* <button className="flex items-center ml-5 relative hover:border hover:border-BorderColor p-1 border border-CardColor rounded-md">
                  <AiOutlineHeart className="text-[30px] text-SubTextColor" />
                  <div className="">
                    <div className="absolute flex justify-center right-[60px] -top-2 text-[10px] bg-MainColor text-CardColor rounded-full h-5 w-5 items-center">
                      10
                    </div>
                    <p className=" text-SubTextColor">Wishlist</p>
                  </div>
                </button> */}
              <div className="flex items-center">
                <Link
                  to="/cart"
                  className="flex items-center ml-2 relative hover:border hover:border-BorderColor p-1 border border-CardColor rounded-md"
                >
                  <AiOutlineShoppingCart className="text-[30px] text-SubTextColor" />
                  <div>
                    <div className="absolute flex justify-center right-[45px] -top-2 text-[10px] bg-MainColor text-CardColor rounded-full h-5 w-5 items-center">
                      10
                    </div>
                    <p className=" text-SubTextColor">Cart</p>
                  </div>
                </Link>

                {user ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="h-8 w-8 rounded-full">
                        <img
                          className="h-8 w-8"
                          src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
                    >
                      <li>
                        <Link>Profile</Link>
                      </li>
                      <li>
                        <Link>My Orders</Link>
                      </li>
                      <li>
                        <Link>Logout</Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="hover:border hover:border-BorderColor p-1 border border-CardColor rounded-md w-[83px]"
                  >
                    <div className="flex items-center">
                      <AiOutlineUser className="text-[30px] text-SubTextColor" />
                      <p className=" text-SubTextColor">Sign Up</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* navigation section  */}
        <div className="bg-CardColor p-1">
          <div className="container mx-auto">
            {/* Big screen  */}
            <div className=" hidden md:block">
              <div className="flex justify-between">
                <NavLink className="text-SubTextColor hover:text-TextColor" to="/">
                  Home
                </NavLink>
                <NavLink className="text-SubTextColor hover:text-TextColor" to="/flash-sell">
                  Flash Sale
                </NavLink>
                <NavLink className="text-SubTextColor hover:text-TextColor" to="/all-seller">
                  All Seller
                </NavLink>
                {/* <Link className="text-SubTextColor hover:text-TextColor" to="/">
                  Affiliating
                </Link> */}
                <NavLink
                  className="text-SubTextColor hover:text-TextColor"
                  to="/category"
                >
                  Categories
                </NavLink>
                <NavLink className="text-SubTextColor hover:text-TextColor" to="/brands">
                  Brands
                </NavLink>
                <Link className="text-SubTextColor hover:text-TextColor" to="/">
                  Track Order
                </Link>
               
              </div>
            </div>
            {/* Small screen  */}
            <div className="relative md:hidden p-1 flex justify-between items-center">
              <Burger></Burger>
              <LanguageToggle></LanguageToggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
