import { useEffect, useState } from "react";
import ProductShowSlider from "../../../components/ProductShowSlider";

const FlashSale = () => {
  const [countdownValue, setCountdownValue] = useState(1000000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownValue > 0) {
        setCountdownValue(countdownValue - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownValue]);
  return (
    <div className={`${countdownValue==0 && 'hidden'} mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg`}>
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Flash Sale</h1>
        </div>
        <div className="">
          <div className="grid grid-flow-col gap-1 lg:gap-2 text-center auto-cols-max">
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": countdownValue / (24 * 60 * 60) }}></span>
              </span>
              <p>days</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": (countdownValue / 3600) % 24 }}></span>
              </span>
              <p>hours</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": (countdownValue / 60) % 60 }}></span>
              </span>
              <p>min</p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 lg:p-3 bg-MainColor rounded-box text-neutral-content">
              <span className="countdown font-mono text-sm lg:text-2xl">
                <span style={{ "--value": countdownValue % 60 }}></span>
              </span>
              <p>sec</p>
            </div>
          </div>
        </div>
        <button className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm">
          View More
        </button>
      </div>
      <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
        <ProductShowSlider></ProductShowSlider>
      </div>
    </div>
  );
};

export default FlashSale;
