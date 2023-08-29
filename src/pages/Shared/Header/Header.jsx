import { useState, useEffect } from "react";
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
import { motion } from "framer-motion";

const Header = () => {
  const user = false;
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);
  const [position, setPosition] = useState(0);
  const handleCloseAdd = () => {
    setHide(true);
  };
  useEffect(() => {
    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      setShow(this.oldScroll > this.scrollY );
      this.oldScroll = this.scrollY;
      setPosition(this.scrollY)
      //console.log(this.scrollY);
    };
  }, []);

  return (
    <div className="shadow-lg ">
      {/* Add Section  */}
      <div
        className={`relative flex h-[35px] items-center justify-end ${
          hide && "hidden"
        }`}
      >
        <button className="absolute mr-4 text-2xl" onClick={handleCloseAdd}>
          <AiOutlineClose />
        </button>
        <img
          className="h-[35px] w-full object-cover"
          src="https://www.pngkit.com/png/full/282-2825717_special-offer-banner-blue-special-offer-banner.png"
        ></img>
      </div>
      <motion.div
        transition={{ duration: .5}}
        initial={{
          opacity: 1,
        }}
        animate={{
          //height:140
          opacity: show? 1 : 0,
        }}
        
        className={`${position>30&& "fixed top-0 z-50 w-full shadow-md"}`}
      >
        {/* number Section  */}
        <div className=" bg-CardColor border-b-BorderColor hidden border-b-[1px]  md:block">
          <div className="container mx-auto p-2">
            <div className="flex justify-between">
              <div className="-ml-1">
                <LanguageToggle></LanguageToggle>
              </div>
              <div className="flex items-center">
                <AiFillPhone className=" text-SubTextColor" />
                <p className="text-SubTextColor lg:mr-0">
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
        <div className="bg-CardColor border-b-BorderColor border-b-[1px]">
          <div className="container mx-auto p-2">
            <div className="flex items-center justify-between ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full lg:h-20 lg:w-20 xl:h-24 xl:w-24">
                <Link className="bg-[#000]" to="/">
                  <img
                    className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 "
                    src="https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                    alt=""
                  />
                </Link>
              </div>
              {/* search  */}
              <div className="relative mr-2 ml-2 w-full rounded-full shadow-sm shadow-[#b6b6b6] md:mr-0 md:ml-0 md:w-[400px] lg:w-[500px] xl:w-[600px]">
                <input
                  className="focus:border-MainColor w-full rounded-full py-2 pl-4 pr-4 focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <div className="bg-MainColor hover:bg-MainColor absolute inset-y-0 right-0 flex items-center justify-center rounded-r-full pl-3 pr-3 rounded-e-lg">
                  <button className="">
                    <AiOutlineSearch className="text-CardColor text-[25px]  hover:text-[27px]" />
                  </button>
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
                  className="hover:border-BorderColor border-CardColor relative ml-2 flex items-center rounded-md border p-1 hover:border"
                >
                  <AiOutlineShoppingCart className="text-SubTextColor text-[30px]" />
                  <div>
                    <div className="bg-MainColor text-CardColor absolute right-[45px] -top-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px]">
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
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow "
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
                    className="hover:border-BorderColor border-CardColor w-[75px] rounded-md border  hover:border "
                  >
                    <div className="flex items-center justify-between">
                      <AiOutlineUser className="text-SubTextColor text-[30px]" />
                      <p className=" text-SubTextColor">Sign Up</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* navigation section  */}
        <div className="bg-CardColor ">
          <div className="container mx-auto p-2">
            {/* Big screen  */}
            <div className=" hidden md:block">
              <div className="flex justify-between">
                <NavLink
                  className="text-SubTextColor hover:underline hover:text-TextColor"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/flash-sell"
                >
                  Flash Sale
                </NavLink>
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/all-seller"
                >
                  All Seller
                </NavLink>
                {/* <Link className="hover:underline text-SubTextColor hover:text-TextColor" to="/">
                  Affiliating
                </Link> */}
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/category"
                >
                  Categories
                </NavLink>
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/brands"
                >
                  Brands
                </NavLink>
                <NavLink className="hover:underline text-SubTextColor hover:text-TextColor" to="/track-order">
                  Track Order
                </NavLink>
              </div>
            </div>
            {/* Small screen  */}
            <div className="relative flex items-center justify-between p-1 md:hidden">
              <Burger></Burger>
              <LanguageToggle></LanguageToggle>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
