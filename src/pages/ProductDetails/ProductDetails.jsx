import { useContext, useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineLine,
  AiOutlinePlus,
  AiOutlineSend,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
// import ReactImageMagnify from "react-image-magnify";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  CloseButton,
  Spinner,
} from "@chakra-ui/react";
import { BiSolidSend } from "react-icons/bi";
import { TbUserCheck, TbUserQuestion } from "react-icons/tb";
import Scrollbars from "react-custom-scrollbars";
import Rating from "react-rating";
import { MdAdd, MdOutlineDisabledByDefault, MdRemove } from "react-icons/md";
import Swal from "sweetalert2";
import { getApi, postApi } from "../../apis";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from "react-router";
import ReviewSection from "../../components/ReviewSection";
const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [messageShow, setMessageShow] = useState(false);
  const { id } = useParams();
  const [product, setProductDetails] = useState(null);
  // console.log(product);
  const url = "http://62.72.31.204:1300";
  useEffect(() => {
    const visitorId = localStorage.getItem("visitorId");
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${url}/product/details?visitorId=${visitorId}&productId=${id}`
        );
        const data = await response.json();
        setProductDetails(data.data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const [formData, setFormData] = useState({
    message: "",
  });
  // const minRows = 2;
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const sendMessage = (e) => {
    e.preventDefault();
  };
  const handleMessageShow = () => {
    setMessageShow(!messageShow);
  };

  const [minOrder, setQuantity] = useState(null);
  const [newPrice, setNewPrice] = useState(product?.price);
  const [totalPrice, setTotalPrice] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [discount, setDiscount] = useState(null);
  const [vat, setVat] = useState(null);

  useEffect(() => {
    let actualAmount = product?.price;
    if (product?.vat > 0) {
      const vat = (product?.vat / 100) * actualAmount;
      setVat(vat);
      actualAmount += (product?.vat / 100) * actualAmount;
    }

    if (product?.percentage) {
      const disc = (product?.offer / 100) * actualAmount;
      setDiscount(disc);
      actualAmount -= (product?.offer / 100) * actualAmount;
    } else if (product?.offer > 0) {
      actualAmount -= product?.offer;
    }
    if (product?.freeDelivery) {
      actualAmount -= product?.deliveryCharge;
    } else if (product?.deliveryCharge > 0) {
      actualAmount += product?.deliveryCharge;
    }
    setQuantity(product?.minOrder);
    setNewPrice(product?.price);
    setTotalPrice(actualAmount);
    setFinalPrice(actualAmount);
  }, [product]);

  // calculation portion

  const handleIncrease = () => {
    const newQuantity = minOrder + 1;
    const newPrice = newQuantity * totalPrice;
    setQuantity(newQuantity);
    setFinalPrice(newPrice);
  };

  const handleDecrease = () => {
    if (minOrder > product?.minOrder) {
      const newQuantity = minOrder - 1;
      const newPrice = newQuantity * totalPrice;
      setQuantity(newQuantity);
      setFinalPrice(newPrice);
    }
  };

  const handleAddToCart = (id, minOrder) => {
    if (user) {
      const token = localStorage.getItem("token");
      postApi(
        "/cart/add",
        {
          productId: id,
          quantity: minOrder,
        },
        token
      )
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add to Cart successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      Swal.fire("Please LogIn");
      Navigate("/login");
    }
  };

  const htmlContent = `<figure>
      <table>
        <tbody>
          ${product?.description}
        </tbody>
      </table>
    </figure>`;

  const [comment, setComment] = useState("");
  const [updateComment, setUpdateComment] = useState();
  const [getComment, setGetComment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  console.log(reviewsData);
  const handleSubmitComment = () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("message", comment);
    data.append("image", null);
    data.append("productId", id);

    const token = localStorage.getItem("token");
    postApi("/comment/create", data, token)
      .then((res) => {
        setComment("");
        setUpdateComment(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getApi(`/comment/get-by-product?productId=${id}`)
      .then((res) => {
        setGetComment(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, updateComment]);

  useEffect(() => {
    getApi(`/review/get-by-product?productId=clmhdbd5d004ejl06ea5kbpdn`)
      .then((res) => {
        setReviewsData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (product == null) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-4">
      <Helmet>
        <title>Product Details | Banglamart E-commerce</title>
      </Helmet>
      {/* product details  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-CardColor p-4">
        <div className="">
          <ImageShow product={product}></ImageShow>
        </div>
        <div>
          <div className="border-b border-b-BorderColor p-4">
            <h1 className="">{product?.title}</h1>
            <div>
              {" "}
              <Rating
                initialRating={3.5}
                readonly
                emptySymbol={
                  <AiOutlineStar className="text-[14px] text-BorderColor" />
                }
                fullSymbol={
                  <AiFillStar className="text-[14px] text-MainColor" />
                }
              />
            </div>
          </div>
          <div className="border-b border-b-BorderColor flex items-center p-4">
            <div>
              <p className="text-SubTextColor">Sold by:</p>
              <h3 className="text-TextColor">
                {product?.seller?.shopName || "In house product"}
              </h3>
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
            <div
              className={`bg-CardColor pb-4 rounded-t-xl bottom-0 w-[280px] lg:right-32 fixed ${
                messageShow
                  ? "transition-all transform translate-y-0"
                  : "transition-all transform translate-y-full"
              } ease-in-out duration-700 shadow-2xl shadow-SubTextColor`}
            >
              <div className="flex justify-end text-SubTextColor">
                <CloseButton onClick={handleMessageShow} size="md" />
              </div>

              <Scrollbars
                style={{ height: 350 }}
                renderThumbVertical={({ style }) => (
                  <div
                    style={{
                      ...style,
                      width: 3,
                      backgroundColor: "#5dade2",
                      borderRadius: 4,
                    }}
                  />
                )}
              >
                <div className="p-3 ">
                  {/* chat start  */}
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </div>
                    <div className="text-xs chat-header flex items-center text-SubTextColor">
                      <p>Sazzad Hossain</p>
                      <time className=" ml-2">12:45</time>
                    </div>
                    <div className="chat-bubble">UI complete hoiche?</div>
                    <div className="chat-footer text-SubTextColor">
                      <p>Delivered</p>
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </div>
                    <div className="text-xs chat-header flex items-center text-SubTextColor">
                      <p>Sazzad Hossain</p>
                      <time className=" ml-2">12:45</time>
                    </div>
                    <div className="chat-bubble">kaj koto dur??</div>
                    <div className="chat-footer text-SubTextColor">
                      <p>Delivered</p>
                    </div>
                  </div>
                  {/* chat end  */}
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/sage-adebayo"
                      />
                    </div>
                    <div className="chat-header flex items-center text-xs text-SubTextColor">
                      <p>Md. Nahiduzzaman</p>
                      <time className=" ml-2">12:46</time>
                    </div>
                    <div className="chat-bubble ">Almost done!</div>
                    <div className="chat-footer text-SubTextColor">
                      Seen at 12:46
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/sage-adebayo"
                      />
                    </div>
                    <div className="chat-header flex items-center text-xs text-SubTextColor">
                      <p>Md. Nahiduzzaman</p>
                      <time className=" ml-2">12:46</time>
                    </div>
                    <div className="chat-bubble ">Shorir er ki obostha?!</div>
                    <div className="chat-footer text-SubTextColor">
                      Seen at 12:46
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </div>
                    <div className="text-xs chat-header flex items-center text-SubTextColor">
                      <p>Sazzad Hossain</p>
                      <time className=" ml-2">12:45</time>
                    </div>
                    <div className="chat-bubble">Time lagbe shere uthte</div>
                    <div className="chat-footer text-SubTextColor">
                      <p>Delivered</p>
                    </div>
                  </div>
                </div>
              </Scrollbars>

              <div className="pt-2 pl-3">
                <form onSubmit={sendMessage} className="flex items-center">
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Message..."
                    className="border p-2 pl-4 rounded-full focus:outline-none focus:ring focus:border-blue-500 resize-none"
                  ></input>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    type="submit"
                    className="ml-2 text-[18px] bg-CardColor rounded-full border border-MainColor h-8 w-8 flex justify-center items-center"
                  >
                    <AiOutlineSend className="text-MainColor "></AiOutlineSend>
                  </motion.button>
                </form>
              </div>
            </div>
            {/* message section end  */}
            <div className="">
              <img
                src={
                  product?.seller?.thumbnail ||
                  "https://i.ibb.co/9t1wQGK/banglamart-prev-ui.png"
                }
                crossOrigin="anonymous"
                className="h-16 w-16 rounded-full"
              />
            </div>
          </div>

          <div className="border-b border-b-BorderColor flex items-center p-4">
            <p className="text-TextColor">Variant:</p>
          </div>
          <div className="border-b border-b-BorderColor p-4">
            {newPrice > totalPrice && (
              <p className="text-SubTextColor">
                Old Price:
                <span className="line-through text-[18px] text-SubTextColor ml-2">
                  {newPrice} ৳
                </span>
                /pc
              </p>
            )}
            <p className="text-SubTextColor">
              Current Price:
              <span className="text-[18px] text-MainColor ml-2">
                {totalPrice} ৳
              </span>
              /pc
            </p>
          </div>
          <div className="border-b border-b-BorderColor p-4 flex items-center">
            <p className="mr-4 text-SubTextColor">Quantity:</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleDecrease}
              className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
            >
              <AiOutlineLine className=" text-SubTextColor" />
            </motion.button>
            <h1 className="mr-4 text-TextColor">{minOrder}</h1>
            {minOrder == product?.quantity ? (
              <button
                disabled
                className="mr-4 rounded-full bg-[#e9a093] p-2 shadow-sm hover:shadow-md"
              >
                <MdOutlineDisabledByDefault className=" text-CardColor" />
              </button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={handleIncrease}
                className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md"
              >
                <AiOutlinePlus className=" text-TextColor" />
              </motion.button>
            )}

            <p className="mr-4 text-SubTextColor">
              (<span>{product?.quantity}</span>) available
            </p>
          </div>
          <div className="p-4">
            <div className=" w-40">
              <div className="flex justify-between">
                <p className="text-SubTextColor">Product Price:</p>
                <p className="text-SubTextColor">{newPrice} ৳</p>
              </div>
              {product?.percentage > 0 && (
                <div className="flex justify-between">
                  <p className="text-SubTextColor">
                    Discount ({product?.offer}%)
                  </p>
                  <p className="text-SubTextColor">-{discount} ৳</p>
                </div>
              )}
              {product?.vat > 0 && (
                <div className="flex justify-between">
                  <p className="text-SubTextColor">Vat ({product?.vat}%)</p>
                  <p className="text-SubTextColor">+{vat} ৳</p>
                </div>
              )}
              {!product?.freeDelivery && (
                <div className="flex justify-between">
                  <p className="text-SubTextColor">Delivery Charge</p>
                  <p className="text-SubTextColor">
                    +{product?.deliveryCharge} ৳
                  </p>
                </div>
              )}
              {!product?.percentage && product?.offer > 0 && (
                <div className="flex justify-between">
                  <p className="text-SubTextColor">Discount</p>
                  <p className="text-SubTextColor">-{product?.offer} ৳</p>
                </div>
              )}
              <div className="flex items-center justify-between border-t-SubTextColor border-t-[1px]">
                <p className="text-TextColor">Total Price:</p>
                <h1 className="text-MainColor">{finalPrice} ৳</h1>
              </div>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <motion.button
                onClick={() => handleAddToCart(product?.id, product?.minOrder)}
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
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <p>
                  <AiOutlineShopping className="text-MainColor  mr-1" />
                </p>
                <p className="text-MainColor">Add to wishlist</p>
              </motion.button> */}
            </div>
            <p className="text-SubTextColor">
              Refund:{" "}
              <span className="ml-2 text-MainColor hover:text-MainColorHover">
                <Link to="/cancellationPolicy">Cash Back</Link>
              </span>{" "}
              <span className="ml-2 text-MainColor hover:text-MainColorHover">
                <Link to="/termsConditions">View Policy</Link>
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
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#5dade2", color: "white" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          {product?.title}
                        </Box>
                        {isExpanded ? (
                          <MdRemove fontSize="18px" />
                        ) : (
                          <MdAdd fontSize="18px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
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
            {reviewsData?.length > 0 ? (
              <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#5dade2", color: "white" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          <h1>Customer Reviews</h1>
                        </Box>
                        {isExpanded ? (
                          <MdRemove fontSize="18px" />
                        ) : (
                          <MdAdd fontSize="18px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <ReviewSection reviews={reviewsData} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
              
            ) : (
              <div className="flex justify-center items-center p-10">
                <h1>No Reviews.</h1>
              </div>
            )}
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
          {user ? (
            <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
              <div className="flex justify-between items-center w-full p-4 mt-4 border border-gray-300 rounded-lg">
                <input
                  type="text"
                  placeholder="Ask a Question..."
                  value={comment}
                  className="w-full outline-none"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={handleSubmitComment}
                  className={`bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 ${
                    !comment || isLoading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={!comment || isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4h4a8 8 0 01-8 8v-4H6z"
                      ></path>
                    </svg>
                  ) : (
                    <BiSolidSend
                      className={`text-2xl ${
                        !comment || isLoading ? "" : "text-MainColor"
                      }`}
                    ></BiSolidSend>
                  )}
                </button>
              </div>
              {getComment ? (
                getComment?.length > 0 ? (
                  getComment.map((c, i) => (
                    <div key={i} className="border-b border-b-[#ece8e8] m-4">
                      <div className="flex items-center p-1">
                        <div className="mr-4">
                          <TbUserQuestion className="text-3xl text-MainColor"></TbUserQuestion>
                        </div>
                        <div className="">
                          <p className="text-[16px] font-semibold">
                            {c?.message}
                          </p>
                          <p className="text-SubTextColor text-[12px] font-mono">
                            Ask by- {c?.user.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-1">
                        <div className="mr-4">
                          <TbUserCheck className="text-3xl text-MainColor"></TbUserCheck>
                        </div>
                        <div>
                          {c?.replay ? (
                            <div>
                              <h2>okay</h2>
                              <p className="text-SubTextColor">
                                Authentic Reply by seller
                              </p>
                            </div>
                          ) : (
                            <h3 className="text-SubTextColor">
                              Seller did not response yet. Please Wait!
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-SubTextColor p-2">
                    No comments available!
                  </p>
                )
              ) : (
                <div className="flex justify-center items-center p-10">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </div>
              )}
            </div>
          ) : (
            <h2 className="text-SubTextColor pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
              Please{" "}
              <Link
                to="/login"
                state={{ from: location }}
                replace
                className="text-MainColor font-bold cursor-pointer hover:underline"
              >
                Login
              </Link>{" "}
              to write & see comments{" "}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const ImageShow = ({ product }) => {
  const url = "http://62.72.31.204:1300";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {/* <ReactImageMagnify
          {...{
            smallImage: {
              alt: `Product ${currentImageIndex + 1}`,
              isFluidWidth: true,
              src: `${url}${product?.images[currentImageIndex]}`,
              sizes:
                "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
              
            },
            largeImage: {
              src: `${url}${product?.images[currentImageIndex]}`,
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
        /> */}
        {product?.images ? (
          <img
            src={`${url}${product?.images[currentImageIndex]}`}
            crossOrigin="anonymous"
            className="object-cover h-96 w-full"
          />
        ) : (
          <img
            src={`${url}${product?.thumbnail}`}
            crossOrigin="anonymous"
            className="object-cover h-96 w-full"
          />
        )}
      </div>
      <div className="flex space-x-4">
        {product?.images?.map((image, index) => (
          <img
            key={index}
            src={`${url}${image}`}
            crossOrigin="anonymous"
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
