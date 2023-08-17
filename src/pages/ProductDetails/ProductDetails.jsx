import {
  AiOutlineLine,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <div className="container mx-auto mt-4">
      {/* product details  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-CardColor p-4">
        <div className="">
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            alt=""
          />
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
            <button className="ml-4 mr-4 pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-md">
              <p className="text-MainColor">Message Seller</p>
            </button>
            <div className="hidden">logo</div>
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
            <button className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md">
              <AiOutlineLine className=" text-SubTextColor" />
            </button>
            <p className="mr-4 text-TextColor">2</p>
            <button className="mr-4 rounded-full bg-[#d2eefd] p-2 shadow-sm hover:shadow-md">
              <AiOutlinePlus className=" text-TextColor" />
            </button>
            <p className="mr-4 text-SubTextColor">
              (<span>5</span>) available
            </p>
            <p className=" text-SubTextColor">
              minimum buy (<span>2</span>)
            </p>
          </div>
          <div className="p-4">
            <p className="text-TextColor">
              Total Price:
              <span className="text-[18px] text-MainColor ml-2">16000 ৳</span>
            </p>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <button className="pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md flex items-center justify-center">
                <p>
                  <AiOutlineShopping className="text-MainColor  mr-1" />
                </p>
                <p className="text-MainColor">Add to cart</p>
              </button>
              <button className="pl-3 pr-3 pt-2 pb-2 bg-MainColor rounded-full shadow-sm hover:shadow-md flex items-center justify-center">
                <p>
                  <AiOutlineShoppingCart className="text-CardColor  mr-1" />
                </p>
                <p className="text-CardColor">Buy Now</p>
              </button>
              <button className="pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md flex items-center justify-center">
                <p>
                  <AiOutlineShopping className="text-MainColor  mr-1" />
                </p>
                <p className="text-MainColor">Add to wishlist</p>
              </button>
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
                <Link>
                  <img
                    className="h-10 w-10 rounded-full ml-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    alt=""
                  />
                </Link>
                <Link>
                  <img
                    className="h-10 w-10 rounded-full ml-2"
                    src="https://cdn-icons-png.flaticon.com/512/4102/4102940.png"
                    alt=""
                  />
                </Link>
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
