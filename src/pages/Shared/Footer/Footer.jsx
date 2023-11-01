import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const handlePhoneClick = () => {
    window.location.href = "tel:+8809611677639";
  };
  return (
    <div>
      <div className="pt-10 mt-10 pb-8 bg-[#DCDCDC] pl-3 pr-1 lg:pr-4 lg:pl-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div>
              <div className="border-b border-b-SubTextColor mb-4">
                <h1>ABOUT US</h1>
              </div>
              <p>
                <span className="font-bold">Banglamart</span> is the operator of
                the eCommerce platform intended to provide food, grocery,
                classifieds, accounting, and inventory solutions. The company
                platform provides a wide range of food, grocery, electronics,
                clothing, and other similar products, enabling customers to
                access all products on one platform.
              </p>
              <div className="flex mt-4">
                <a
                  className="mr-3 hover:shadow-md"
                  href="https://play.google.com/store/apps/details?id=com.banglamart.banglamart"
                  target="blank"
                >
                  <img
                    className="h-10 w-36"
                    src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
                  ></img>
                </a>
                <a className=" hover:shadow-md" href="/" target="blank">
                  <img
                    className="h-10 w-36"
                    src="https://www.pngkit.com/png/full/322-3225520_download-the-app-available-on-the-app-store.png"
                  ></img>
                </a>
              </div>
            </div>
            <div>
              <div className="border-b border-b-SubTextColor mb-4">
                <h1>CONTACT US</h1>
              </div>
              <div className="mb-2">
                <p className="text-SubTextColor">Address:</p>
                <p className="text-TextColor">
                  House-65, Road-2, RK Road,Islambag, Rangpur
                </p>
              </div>
              <div className="mb-2">
                <p className="text-SubTextColor">Phone:</p>
                <p
                  onClick={handlePhoneClick}
                  className="text-TextColor cursor-pointer"
                >
                  +8809649110110
                </p>
              </div>
              <div>
                <p className="text-SubTextColor">Email:</p>
                <a
                  href="mailto:banglamartecommerce@gmail.com"
                  className="text-TextColor cursor-pointer"
                >
                  <p>banglamartecommerce@gmail.com</p>
                </a>
              </div>
            </div>
            <div>
              <div className="border-b border-b-SubTextColor mb-4">
                <h1>USEFUL LINKS</h1>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/termsConditions"
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                >
                  Terms & Conditions
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/privacyPolicy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/sellerPolicy"
                >
                  Seller Policy
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/returnPolicy"
                >
                  Return Policy
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/supportPolicy"
                >
                  Support Policy
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/cancellationPolicy"
                >
                  Cancellation policy
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/faq"
                >
                  FAQ
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/blog"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <div className="border-b border-b-SubTextColor mb-4">
                <h1>ACCOUNT</h1>
              </div>
              <div className="flex flex-col">
                {user ? (
                  ""
                ) : (
                  <Link
                    className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/track-order"
                >
                  Track Order
                </Link>
                <Link
                  className="mb-1 hover:underline text-[14px] text-SubTextColor hover:text-TextColor"
                  to="/track-order"
                >
                  Order History
                </Link>
                {/* <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Affiliating</Link> */}
                <Link
                  className="mt-4 p-2 text-center rounded-full bg-MainColor hover:bg-MainColorHover text-CardColor shadow-md"
                  to="/seller-form"
                >
                  BE A SELLER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-4 pb-4 bg-[#DCDCDC]">
        <div className="md:flex justify-between items-center container mx-auto p-1">
          <p className="text-SubTextColor  md:block hidden">
            &copy; {new Date().getFullYear()} Banglamart E-commerce Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center bg-CardColor p-1 md:p-4 rounded-lg">
            <p className="text-TextColor md:text-4xl font-bold">Pay With: </p>
            <div>
            <p className="text-TextColor text-center md:text-4xl font-bold mb-2">We Accept </p>
              <div className="grid grid-cols-4 md:grid-cols-6 ml-1">
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/QK77SRH/Trust-bank.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/WvL3Bcg/southeast-bank.jpg"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/9HH0b87/Mutual-Truest-bank.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/1d4YGrg/meghna-bank-ltd.jpg"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/Sr28r6P/download-2023-11-01-T105802-197.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/qkQFk7z/dhaka-bank-logo.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/MMJSj5C/Bank-Asia-Limited-Logo.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/VtN7Z2n/bkash.jpg"
                  alt=""
                />

                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/jH5Pgfh/download-2023-11-01-T111007-893.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/0sVZ3ZQ/download-2023-11-01-T110924-683.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/G9WWBmw/IFIC-bank.png"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/GMNY4Lq/Dutch-Bangla-Bank-Limited.jpg"
                  alt=""
                />
                <img
                  className="h-8 w-20 md:h-16 md:w-32"
                  src="https://i.ibb.co/BGH0jg4/10-8.png"
                  alt="jamuna bank"
                />
              </div>
              <div className="flex justify-center mt-2">
                <img
                  className="h-10 md:h-16"
                  src="https://i.ibb.co/tssWPGr/pvn10-R2o-Vjv-Ta-TH02-G4ykx-Bz1-Igl0-Ew-Bh-Ifk-U3o4.png"
                  alt=""
                />
              </div>
              <p className="text-right mt-2 text-SubTextColor  md:hidden block">
            &copy; {new Date().getFullYear()} Banglamart E-commerce Ltd. All
            rights reserved.
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
