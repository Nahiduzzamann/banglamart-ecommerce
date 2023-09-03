import { useState } from "react";
import {
  AiOutlineLine,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import ReactImageMagnify from "react-image-magnify";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Avatar } from "@chakra-ui/react";

const ProductDetails = () => {
  const [messageShow, setMessageShow] = useState(false);
  const products = [
    {
      images: [
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
        "https://thumbs.dreamstime.com/b/minsk-belarus-october-fujifilm-t-kit-xf-mm-silver-camera-body-brown-wooden-background-vintage-globe-232384370.jpg",
        "https://st3.depositphotos.com/1005891/36027/i/450/depositphotos_360277418-stock-photo-fuji-x-t3-with-three.jpg",
      ],
    },
  ];

  const handleMessageShow = () => {
    setMessageShow(!messageShow);
  };
  return (
    <div className="container mx-auto mt-4">
      <Helmet>
        <title>Product Details | Banglamart E-commerce</title>
      </Helmet>
      {/* product details  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-CardColor p-4">
        <div className="">
          {products.map((product, index) => (
            <ImageShow product={product} key={index}></ImageShow>
          ))}
        </div>
        <div>
          <div className="border-b border-b-BorderColor p-4">
            <h1 className="">Walton</h1>
            <div>Rating</div>
          </div>
          <div className="border-b border-b-BorderColor flex items-center p-4">
            <div>
              <p className="text-SubTextColor">Sold by:</p>
              <h3 className="text-TextColor">InHouse Product</h3>
            </div>
            <motion.button
              onClick={handleMessageShow}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="ml-4 mr-4 pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-md"
            >
              <p className="text-MainColor">Message Seller</p>
            </motion.button>
            {/* message section  */}
            <div className={`bg-BackgroundColor bottom-0 w-[280px] lg:right-32 fixed ${messageShow ?'transition-all transform translate-y-0': 'transition-all transform translate-y-full'} ease-in-out duration-700`}>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </div>
                <div className="text-xs chat-header flex items-center">
                  <p>Sazzad Hossain</p>
                  <time className="opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble">UI complete hoiche?</div>
                <div className="chat-footer opacity-50"><p>Delivered</p></div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/sage-adebayo"
                  />
                </div>
                <div className="chat-header flex items-center text-xs">
                  <p>Md. Nahiduzzaman</p>
                  <time className=" opacity-50 ml-2">12:46</time>
                </div>
                <div className="chat-bubble">Almost done!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>
            {/* message section end  */}
            <div className="hidden">logo</div>
          </div>

          <div className="border-b border-b-BorderColor flex items-center p-4">
            <p className="text-TextColor">Variant:</p>
          </div>
          <div className="border-b border-b-BorderColor p-4">
            <p className="text-SubTextColor">
              Old Price:
              <span className="line-through text-[18px] text-SubTextColor ml-2">
                9000 ৳
              </span>
              /pc
            </p>
            <p className="text-SubTextColor">
              Current Price:
              <span className="text-[18px] text-MainColor ml-2">8000 ৳</span>/pc
            </p>
          </div>
          <div className="border-b border-b-BorderColor p-4 flex items-center">
            <p className="mr-4 text-SubTextColor">Quantity:</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
            >
              <AiOutlineLine className=" text-SubTextColor" />
            </motion.button>
            <p className="mr-4 text-TextColor">2</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
            >
              <AiOutlinePlus className=" text-TextColor" />
            </motion.button>
            <p className="mr-4 text-SubTextColor">
              (<span>5</span>) available
            </p>
          </div>
          <div className="p-4">
            <p className="text-TextColor">
              Total Price:
              <span className="text-[18px] text-MainColor ml-2">16000 ৳</span>
            </p>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <p>
                  <AiOutlineShopping className="text-MainColor  mr-1" />
                </p>
                <p className="text-MainColor">Add to cart</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="pl-3 pr-3 pt-2 pb-2 bg-MainColor rounded-full shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <p>
                  <AiOutlineShoppingCart className="text-CardColor  mr-1" />
                </p>
                <p className="text-CardColor">Buy Now</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <p>
                  <AiOutlineShopping className="text-MainColor  mr-1" />
                </p>
                <p className="text-MainColor">Add to wishlist</p>
              </motion.button>
            </div>
            <p className="text-SubTextColor">
              Refund:{" "}
              <span className="ml-2 text-MainColor hover:text-MainColorHover">
                <Link to="/">Cash Back</Link>
              </span>{" "}
              <span className="ml-2 text-MainColor hover:text-MainColorHover">
                <Link to="/">View Policy</Link>
              </span>
            </p>
            <div className="mt-4 flex justify-center items-center">
              <p className="text-SubTextColor mr-2">Share:</p>
              <div className="flex ">
                <FacebookShareButton url="#">
                  <FacebookIcon className="h-10 w-10 rounded-full ml-2" />
                </FacebookShareButton>
                <WhatsappShareButton url="#">
                  <WhatsappIcon className="h-10 w-10 rounded-full ml-2" />
                </WhatsappShareButton>
                <FacebookMessengerShareButton url="#">
                  <FacebookMessengerIcon className="h-10 w-10 rounded-full ml-2" />
                </FacebookMessengerShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* descriptions  */}
      <div>
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Descriptions</h1>
            </div>
          </div>
          <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
            Description
          </div>
        </div>
      </div>
      {/* Reviews  */}
      <div>
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Reviews</h1>
            </div>
          </div>
          <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
            Reviews
          </div>
        </div>
      </div>
      <div>
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Comments</h1>
            </div>
          </div>
          <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const ImageShow = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `Product ${currentImageIndex + 1}`,
              isFluidWidth: true,
              src: product.images[currentImageIndex],
              sizes:
                "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
            },
            largeImage: {
              src: product.images[currentImageIndex],
              width: 1200,
              height: 1800,
            },
            enlargedImagePosition: "over",
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "200%",
            },
            shouldUsePositiveSpaceLens: true,
            lensStyle: { background: "rgba(255,255,255,.5)" },
            isHintEnabled: true,
            hintBgOpacity: 1,
            hintTextColor: "#000",
          }}
        />
      </div>
      <div className="flex space-x-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`cursor-pointer h-16 w-16 border-[3px] ${
              currentImageIndex === index
                ? "border-MainColor"
                : "border-SubTextColor"
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
