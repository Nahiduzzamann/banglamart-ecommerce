import { useState, useEffect, useContext } from "react";
import {
  AiOutlineClose,
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";
import LanguageToggle from "../../../components/LanguageToggle";
import { useTranslation } from "react-i18next";
import { Link, NavLink, Navigate } from "react-router-dom";
import Burger from "./Nav/Burger";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import {
  TbBrandMessenger,
  TbListDetails,
  TbLogout2,
  TbTruckDelivery,
  TbUserShield,
} from "react-icons/tb";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { PiSmileySadLight } from "react-icons/pi";

const Header = () => {
  const { user, logOut, cart } = useContext(AuthContext);
  // console.log(user);
  const from = location.state?.from?.pathname || "/";

  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);
  const [position, setPosition] = useState(0);
  const handleCloseAdd = () => {
    setHide(true);
  };
  useEffect(() => {
    window.onscroll = function () {
      // print "false" if direction is down and "true" if up
      setShow(this.oldScroll > this.scrollY);
      this.oldScroll = this.scrollY;
      setPosition(this.scrollY);
      //console.log(this.scrollY);
    };
  }, []);

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log Out successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
    Navigate(from, { replace: true });
  };

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 4" },
    { id: 7, name: "Product 4" },
    { id: 8, name: "Product 4" },
    { id: 9, name: "Product 4" },
    // Add more products as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reLoad, setReLoad] = useState(null);

  useEffect(() => {
    // Simulate an API call with a delay to fetch search results
    setLoading(true);
    setTimeout(() => {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      setLoading(false);
    }, 500);
  }, [searchQuery, reLoad]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = (e) => {
    setReLoad(e.timeStamp);
  };
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
        transition={{ duration: 0.5 }}
        initial={{
          opacity: 1,
        }}
        animate={{
          //height:140
          opacity: show ? 1 : 0,
        }}
        className={`${position > 30 && "fixed top-0 z-50 w-full shadow-md"}`}
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
              </div>
            </div>
          </div>
        </div>
        {/* search logo section  */}
        <div className="bg-CardColor border-b-BorderColor border-b-[1px]">
          <div className="container mx-auto p-1">
            <div className="flex items-center justify-between ">
              <div className=" h-16 w-16 rounded-full lg:h-20 lg:w-20">
                <Link className="" to="/">
                  <img
                    className="h-16 w-16 lg:h-20 lg:w-20 "
                    src="https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                    alt=""
                  />
                </Link>
              </div>
              {/* search  */}
              <div>
                <div className="relative mr-2 ml-2 w-[220px] rounded-full shadow-sm shadow-[#b6b6b6] md:mr-0 md:ml-0 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                  <input
                    className="focus:border-MainColor outline-MainColor w-full rounded-full py-2 pl-4 pr-4 focus:outline-1"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                  />

                  <div className="bg-MainColor absolute inset-y-0 right-0 flex items-center justify-center rounded-r-full pl-3 pr-3 rounded-e-lg">
                    <motion.button
                      onClick={handleSearch}
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 0.8 }}
                      className=""
                    >
                      <AiOutlineSearch className="text-CardColor text-[25px]  " />
                    </motion.button>
                  </div>
                </div>
                {searchQuery && (
                  <div className="mr-2 ml-2 md:mr-0 md:ml-0 search-results absolute bg-BorderColor z-10 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] p-2 rounded-md text-SubTextColor">
                    <h1 className="text-center bg-CardColor rounded">
                      Products
                    </h1>
                    {loading ? (
                      <div className="flex justify-center items-center p-10">
                        <Spinner
                          thickness="4px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="blue.500"
                          size="xl"
                        />
                      </div>
                    ) : searchResults?.length > 0 ? (
                      searchResults?.map((product) => (
                        <div key={product.id}>{product.name}</div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center mt-4">
                        <PiSmileySadLight className="text-SubTextColor text-4xl"></PiSmileySadLight>
                        <p className="text-SubTextColor">No Result Found</p>
                      </div>
                    )}
                  </div>
                )}
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
                <Menu>
                  <MenuButton className="hover:border-BorderColor border-CardColor relative ml-2 md:flex hidden items-center rounded-md border hover:border ">
                    <AiOutlineComment className="text-SubTextColor text-[30px]" />
                    <div>
                      <div className="bg-MainColor text-CardColor absolute right-[15px] -top-3 flex h-5 w-5 items-center justify-center rounded-full text-[10px]">
                        10
                      </div>
                    </div>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
                <Link
                  to="/notifications"
                  className="hover:border-BorderColor border-CardColor relative ml-2 md:flex hidden items-center rounded-md border hover:border "
                >
                  <AiOutlineBell className="text-SubTextColor text-[30px]" />
                  <div>
                    <div className="bg-MainColor text-CardColor absolute right-[12px] -top-3 flex h-5 w-5 items-center justify-center rounded-full text-[10px]">
                      10
                    </div>
                  </div>
                </Link>
                <Link
                  to="/cart"
                  className="hover:border-BorderColor border-CardColor relative ml-2 md:flex hidden items-center rounded-md border hover:border mr-2"
                >
                  <AiOutlineShoppingCart className="text-SubTextColor text-[30px]" />
                  <div>
                    <div className="bg-MainColor text-CardColor absolute right-[35px] -top-3 flex h-5 w-5 items-center justify-center rounded-full text-[10px]">
                      {user ? (cart?.length > 9 ? "9+" : cart?.length) : "0"}
                    </div>
                    <p className=" text-SubTextColor">Cart</p>
                  </div>
                </Link>

                {user ? (
                  <Menu>
                    <MenuButton>
                      <Avatar
                        bg="teal.500"
                        icon={<AiOutlineUser fontSize="1.5rem" />}
                        size="md"
                        name={user?.name}
                        src={user?.image}
                      />
                    </MenuButton>
                    <MenuList>
                      <h2 className="text-center text-SubTextColor">
                        Welcome {user?.name}
                      </h2>
                      <MenuGroup title="Profile">
                        <MenuItem>
                          <Link
                            className="text-SubTextColor flex items-center"
                            to="/profile"
                          >
                            <CgProfile className="text-[18px] text-SubTextColor mr-2" />
                            <h3 className="hover:underline">Profile</h3>
                          </Link>
                        </MenuItem>
                        {user?.role === 2 ? (
                          <MenuItem>
                            <a
                              className="text-SubTextColor flex items-center"
                              href="http://62.72.31.204:3000"
                              target="blank"
                            >
                              <TbUserShield className="text-[18px] text-SubTextColor mr-2" />
                              <h3 className="hover:underline">Admin Panel</h3>
                            </a>
                          </MenuItem>
                        ) : (
                          ""
                        )}
                        <MenuItem>
                          <Link
                            className="text-SubTextColor flex items-center"
                            to="/track-order"
                          >
                            <TbListDetails className="text-[18px] text-SubTextColor mr-2" />

                            <h3 className="hover:underline">My Orders</h3>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            className="text-SubTextColor flex items-center"
                            to="/track-order"
                          >
                            <TbBrandMessenger className="text-[18px] text-SubTextColor mr-2" />

                            <h3 className="hover:underline">Conversation</h3>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            className="text-SubTextColor flex items-center"
                            to="/addDeliveryAddress"
                          >
                            <TbTruckDelivery className="text-[18px] text-SubTextColor mr-2" />
                            <h3 className="hover:underline">
                              Delivery Address
                            </h3>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link className="text-SubTextColor flex items-center">
                            <TbLogout2 className="text-[18px] text-SubTextColor mr-2" />
                            <h3
                              className="hover:underline"
                              onClick={handleLogOut}
                            >
                              Log out
                            </h3>
                          </Link>
                        </MenuItem>
                      </MenuGroup>
                      <MenuGroup title="Help">
                        <MenuItem>
                          <Link to="/support">
                            <h3 className="hover:underline">Support</h3>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/faq">
                            <h3 className="hover:underline">FAQ</h3>
                          </Link>
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
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
                  to="/bargaining-products"
                >
                  Bargaining Products
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
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/track-order"
                >
                  Track Order
                </NavLink>
                <NavLink
                  className="hover:underline text-SubTextColor hover:text-TextColor"
                  to="/support"
                >
                  Support
                </NavLink>
              </div>
            </div>
            {/* Small screen  */}
            <div className="relative flex items-center justify-between p-1 md:hidden">
              <Burger></Burger>
              <div className="flex items-center">
                <Link
                  to="/notifications"
                  className="hover:border-BorderColor border-CardColor relative ml-2 flex md:hidden items-center rounded-md border hover:border "
                >
                  <AiOutlineBell className="text-SubTextColor text-[20px]" />
                  <div>
                    <div className="bg-MainColor text-CardColor absolute right-[12px] -top-[6px] flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
                      <p className="text-[10px]">10</p>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/cart"
                  className="hover:border-BorderColor border-CardColor relative ml-2 flex md:hidden items-center rounded-md border hover:border mr-2"
                >
                  <AiOutlineShoppingCart className="text-SubTextColor text-[20px]" />
                  <div>
                    <div className="bg-MainColor text-CardColor absolute right-[36px] -top-[6px] flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
                      <p className="p-[1px]">
                        {cart?.length > 9 ? "9+" : cart?.length}
                      </p>
                    </div>
                    <p className=" text-SubTextColor">Cart</p>
                  </div>
                </Link>
                <LanguageToggle></LanguageToggle>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
