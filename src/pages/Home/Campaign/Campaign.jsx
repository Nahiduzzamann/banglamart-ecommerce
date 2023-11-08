import { useEffect, useState } from "react";
import { getApi, url } from "../../../apis";

const Campaign = () => {
  const [campaign, setCampaign] = useState(null);
  console.log(campaign);
  useEffect(() => {
    getApi("/campaign/upcoming", null).then((r) => {
      setCampaign(r.data.data);
    });
  }, []);
  return (
    <div className="container mt-4 mx-auto">
      <div className="bg-gradient-to-r from-[#924e4e] to-[#4e9287] p-4">
        <h2 className="text-center text-CardColor">Upcoming Campaign</h2>
        <div className="flex justify-center">
          {campaign &&
            campaign.map((data, i) => (
              <div
                key={i}
                className="flex items-center bg-CardColor gap-2 p-4 m-4 rounded-lg"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="h-16 w-40"
                    src={`${url}${data?.image}`}
                    alt=""
                  />
                  <h3 className="p-2 text-[#ff4343] font-semibold">Campaign start in</h3>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-2 text-center auto-cols-max">
                    <div className="flex items-center flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 15 }}></span>
                      </span>
                      days
                    </div>
                    <div className="flex items-center flex-col p-1 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 10 }}></span>
                      </span>
                      hours
                    </div>
                    <div className="flex items-center flex-col p-1 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 24 }}></span>
                      </span>
                      min
                    </div>
                    <div className="flex items-center flex-col p-1 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": 44 }}></span>
                      </span>
                      sec
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
