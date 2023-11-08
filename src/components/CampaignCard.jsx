import { useEffect, useState } from "react";
import { url } from "../apis";

const CampaignCard = ({ data }) => {
  //   const startTimestamp = new Date(data?.startAt).getTime();

  const [remainingTime, setRemainingTime] = useState(
    (new Date(data?.startAt).getTime() - new Date().getTime()) / 1000
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = Math.max(0, remainingTime - 1);
      setRemainingTime(newRemainingTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime,data]);
  console.log(remainingTime);
  return (
    <div className="flex justify-center items-center bg-CardColor gap-4 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <img className="h-16 w-40" src={`${url}${data?.image}`} alt="" />
        <h3 className="p-2 text-[#ff4343] font-semibold">Campaign start in</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 text-center auto-cols-max">
          <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
            <span className="text-lg font-mono">
              {(remainingTime / 86400).toFixed(0)}
            </span>
            <span className="text-lg font-mono">days</span>
          </div>
          <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
            <span className="text-lg font-mono">
              {((remainingTime / 3600) % 24).toFixed(0)}
            </span>
            <span className="text-lg font-mono">hours</span>
          </div>
          <div className="flex flex-col p-1 bg-neutral rounded-box text-neutral-content">
            <span className="text-lg font-mono">
              {((remainingTime / 60) % 60).toFixed(0)}
            </span>
            <span className="text-lg font-mono"> min</span>
          </div>
          <div className="flex flex-col items-center pt-3 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-lg">
              <span style={{ "--value": remainingTime % 60 }}></span>
            </span>
            <span className="text-lg font-mono"> sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
