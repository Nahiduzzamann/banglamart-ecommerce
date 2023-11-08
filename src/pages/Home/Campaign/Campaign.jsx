import { useEffect, useState } from "react";
import { getApi } from "../../../apis";
import CampaignCard from "../../../components/CampaignCard";

const Campaign = () => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    getApi("/campaign/upcoming", null).then((r) => {
      setCampaign(r.data.data);
    });
  }, []);

  return (
    <div
      className={`container mt-4 mx-auto ${campaign.length > 0 || "hidden"}`}
    >
      <div className="bg-gradient-to-r from-[#924e4e] to-[#4e9287] py-4 w-full">
        <h2 className="text-center text-CardColor">Upcoming Campaign</h2>
        <div className="flex overflow-x-auto w-[calc(100%-32px)]">
          {campaign.map((data, i) => (
            <div key={i} className="">
              <CampaignCard data={data}></CampaignCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
