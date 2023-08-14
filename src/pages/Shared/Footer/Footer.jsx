import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-10 mt-10 pb-8 bg-[#DCDCDC] pl-1 pr-1 lg:pr-0 lg:pl-0 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div>
            <div className="border-b border-b-SubTextColor mb-4">
              <h1>ABOUT US</h1>
            </div>
            <p>
              <span className="font-bold">Banglamart</span> is the operator of
              the eCommerce platform intended to provide food, grocery,
              classifieds, accounting, and inventory solutions. The company's
              platform provides a wide range of food, grocery, electronics,
              clothing, and other similar products, enabling customers to access
              all products on one platform.
            </p>
            <div className="flex mt-4">
              <a
                className="mr-3 hover:shadow-md"
                href="https://play.google.com/store/apps/details?id=com.banglamart.banglamart"
                target="blank"
              >
                <img
                  className="h-14 w-36"
                  src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
                ></img>
              </a>
              <a
              className=" hover:shadow-md"
                href="/"
                target="blank"
              >
                <img
                  className="h-14 w-36"
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
              <p className="text-TextColor">House-65, Road-2, RK Road, Islambag, Rangpur</p>
            </div>
            <div className="mb-2">
              <p className="text-SubTextColor">Phone:</p>
              <p className="text-TextColor">+8809611677639</p>
            </div>
            <div>
              <p className="text-SubTextColor">Email:</p>
              <p className="text-TextColor">banglamartecommerce@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="border-b border-b-SubTextColor mb-4">
              <h1>USEFUL LINKS</h1>
            </div>
            <div className="flex flex-col">
              <Link to='/termsConditions' className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" >Terms & Conditions</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Privacy Policy</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Seller Policy</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Return Policy</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Support Policy</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Cancellation policy</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">FAQ</Link>
              <Link className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Blog</Link>
            </div>
          </div>
          <div>
            <div className="border-b border-b-SubTextColor mb-4">
              <h1>ACCOUNT</h1>
            </div>
            <div className="flex flex-col">
              <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Login</Link>
              <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Wishlist</Link>
              <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Track Order</Link>
              <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Order History</Link>
              <Link  className="mb-1 text-[14px] text-SubTextColor hover:text-TextColor" to="/">Affiliating</Link>
              <Link className="p-2 text-center rounded-full bg-MainColor hover:bg-MainColorHover text-CardColor shadow-md" to="/">BE A SELLER</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
