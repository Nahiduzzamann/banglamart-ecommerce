import { AiOutlineLine, AiOutlinePlus, AiOutlineShopping,AiOutlineShoppingCart } from "react-icons/ai";
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
            <div className="p-4">
              <button className="mr-4 pl-3 pr-3 pt-2 pb-2 bg-[#d2eefd] rounded-full shadow-sm hover:shadow-md">
                <div className="flex items-center">
                  <p>
                    <AiOutlineShopping className="text-MainColor  mr-1"/>
                  </p>
                  <p className="text-MainColor">Add to cart</p>
                </div>
              </button>
              <button className="pl-3 pr-3 pt-2 pb-2 bg-MainColor rounded-full shadow-sm hover:shadow-md">
              <div className="flex items-center">
                  <p>
                    <AiOutlineShoppingCart className="text-CardColor  mr-1"/>
                  </p>
                  <p className="text-CardColor">Buy Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
