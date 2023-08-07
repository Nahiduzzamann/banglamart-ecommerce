import ProductShowSlider from "../../../components/ProductShowSlider";

const FlashSale = () => {
  return (
    <div className="container mx-auto mt-4 p-1 lg:p-0 bg-CardColor rounded-lg">
      <div className="flex border-b-[1px] border-b-BorderColor pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Flash Sale</h1>
        </div>
        <div className="">time</div>
        <button className="mr-10 pb-1 pt-1 pl-3 pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover">
          View More
        </button>
      </div>
      <div className="pl-10 pr-10 pt-5 pb-5">
        <ProductShowSlider></ProductShowSlider>
      </div>
    </div>
  );
};

export default FlashSale;
