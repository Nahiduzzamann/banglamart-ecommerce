import { Link } from "react-router-dom";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Cart = () => {
  const dummyProductData = [
    {
      id: 1,
      sellerShopImage:
        "https://media-cdn.tripadvisor.com/media/photo-s/05/b2/ae/86/trend-fashion-tailor.jpg",
      sellerShopName: "Fashion Trends",
      productImage:
        "https://static-01.daraz.com.bd/p/67b4c12bd28726e7b8118955b9ac8703.jpg",
      productName: "Women's Casual Dress",
      variant: "Blue, Medium",
      price: "29.99",
    },
    {
      id: 2,
      sellerShopImage:
        "https://pbs.twimg.com/profile_images/1087403344446947339/8mGjwDxm_400x400.jpg",
      sellerShopName: "Electronics Hub",
      productImage:
        "https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/90e3b9f4120fc209bf60003e3b0e1323/a/9/a996bl-18.6.23..jpg",
      productName: "Wireless Bluetooth Headphones",
      variant: "Black",
      price: "49.99",
    },
    {
      id: 3,
      sellerShopImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoaSOuI0wVZBfyb3LKQpUHtegUMdxJJxgRg&usqp=CAU",
      sellerShopName: "Home Decor Emporium",
      productImage:
        "https://secure.img1-cg.wfcdn.com/im/50651305/resize-h210-w210%5Ecompr-r85/1230/123090784/Medrano+Table+Lamp.jpg",
      productName: "Modern Table Lamp",
      variant: "White",
      price: "39.99",
    },
    {
      id: 4,
      sellerShopImage:
        "https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/influencer-5bb88584_1575132063442_original._CR0,0,1080,1080_._FMjpg_.jpeg",
      sellerShopName: "Tech Gadgets Store",
      productImage:
        "https://digitalshopbd.com/public/uploads/all/NMxAm0PpAKGWepo3ponx4BFOIZshkAjxXX2Jv1b1.jpg",
      productName: "Smartphone Tripod Stand",
      variant: "Adjustable Height",
      price: "19.99",
    },
    {
      id: 5,
      sellerShopImage:
        "https://livebuylocal.com.au/wp-content/uploads/2020/11/46502178_2831384587000376_8785281331098550272_n.jpg",
      sellerShopName: "Beauty Essentials",
      productImage:
        "https://www.fresh.com/on/demandware.static/-/Sites-fresh_master_catalog/default/dwd2f3999c/product_images/H00005424_main_pdp.jpg",
      productName: "Rose-Infused Face Serum",
      variant: "30ml",
      price: "34.99",
    },
  ];
  return (
    <div className="container mx-auto m-4">
      <Helmet>
        <title>Cart | Banglamart E-commerce</title>
      </Helmet>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-3 bg-CardColor md:col-span-3 col-span-4">
          {dummyProductData.map((product, i) => (
            <div
              key={i}
              className="border-b border-b-BorderColor mb-2 shadow-lg hover:shadow-lg shadow-BorderColor"
            >
              <div className="bg-BackgroundColor rounded-sm p-2 flex">
                <img
                  src={product.sellerShopImage}
                  className="h-10 w-10 rounded"
                  alt=""
                />
                <p className="text-TextColor ml-2">{product.sellerShopName}</p>
              </div>
              <div className="flex mt-2 mb-2">
                <div>
                  <img
                    src={product.productImage}
                    className="h-16 w-16"
                    alt=""
                  />
                </div>
                <div className="w-full ml-2">
                  <div className="flex justify-between">
                    <div>
                      <h2>{product.productName}</h2>
                    </div>
                    <div className="mr-2">
                      <h2>{product.price}৳</h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <p className="mr-2 text-SubTextColor">Quantity:</p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="mr-2 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
                      >
                        <AiOutlineLine className=" text-SubTextColor" />
                      </motion.button>
                      <p className="mr-2 text-TextColor">2</p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="mr-2 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
                      >
                        <AiOutlinePlus className=" text-TextColor" />
                      </motion.button>
                      <p className="mr-2 text-SubTextColor">
                        available (<span>5</span>)
                      </p>
                    </div>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="text-SubTextColor mr-2 underline text-[14px] font-bold"
                      >
                        remove
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md p-3 bg-CardColor md:col-span-1 col-span-4 h-min">
          <div className="flex flex-col justify-center items-center p-2 bg-BackgroundColor rounded">
            <p className="text-TextColor">Please add your address</p>
            <Link
              to="/addDeliveryAddress"
              className="bg-TextColor pl-4 pr-4 p-1 rounded mt-1 shadow-sm shadow-BackgroundColor hover:shadow-TextColor"
            >
              <p className="text-CardColor ">Add Address</p>
            </Link>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Subtotal</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Total</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="w-full mt-2 shadow-md shadow-SubTextColor hover:shadow-TextColor"
          >
            <div className="flex justify-center items-center bg-TextColor  p-1 rounded-sm ">
              <h2 className="text-CardColor">Confirm Order</h2>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
