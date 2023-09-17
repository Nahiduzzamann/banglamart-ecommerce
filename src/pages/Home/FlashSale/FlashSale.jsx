import { useEffect, useState } from "react";
import TimerFlashSell from "../../../components/TimerFlashSell";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlashSellData } from "../../../services/actions/flashSellDataAction";
import EmptyContent from "../../../components/EmptyContent";
import FlashSellProductShowSlider from "../../../components/FlashSellProductShowSlider";

const FlashSale = () => {
  const dispatch = useDispatch();

  const flashSellId =useSelector(
    (state) => state.flashSell?.flashSell?.data[0]?.id
  )

  useEffect(() => {
    dispatch(fetchFlashSellData(flashSellId));
  }, [flashSellId]);

  const flashSellData = useSelector(
    (state) => state.flashSellData?.flashSellData?.data
  );

  //calculate time
  const flashSell = useSelector((state) => state.flashSell?.flashSell?.data[0]);

  const flashSaleData = {
    startAt: new Date(flashSell?.startAt).getTime(),
    endAt: new Date(flashSell?.endAt).getTime(),
  };

  const [remainingTime, setRemainingTime] = useState(
    flashSaleData.endAt - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = flashSaleData.endAt - new Date().getTime();
      setRemainingTime(newRemainingTime); //
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div
      className={`${  
        remainingTime || "hidden" } mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg`}
    >
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Flash Sale</h1>
        </div>
        <div className={`${flashSellData?.length > 10 || "mr-4"}`}>
          {flashSaleData&&flashSaleData.endAt&&(<TimerFlashSell flashSaleData={flashSaleData}></TimerFlashSell>)}
        </div>
      
       
        {flashSellData?.length > 10 && (
          <Link
            to="flash-sell"
            className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm"
          >
            View All
          </Link>
        )}
      </div>
      <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
        {flashSellData?.length <= 0 ? (
          <EmptyContent text="No Offer available"></EmptyContent>
        ) : (
          <FlashSellProductShowSlider flashSellData={flashSellData}></FlashSellProductShowSlider>
        )}
      </div>
    </div>
  );
};

export default FlashSale;
