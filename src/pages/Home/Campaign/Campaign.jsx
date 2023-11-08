import { useEffect, useState } from "react";
import { getApi } from "../../../apis";
import CampaignCard from "../../../components/CampaignCard";

import Slider from "react-slick";
const Campaign = () => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    getApi("/campaign/upcoming", null).then((r) => {
      setCampaign(r.data.data);
    });
  }, []);

  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderSettings = {
    arrows: false,
    infinite: false,
    dots: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    touchThreshold: 4,
    focusOnSelect: true,
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`container mt-4 mx-auto ${campaign.length > 0 || "hidden"}`}
    >
      <div className="bg-gradient-to-r from-[#924e4e] to-[#4e9287] py-4 w-full">
        <h2 className="text-center text-CardColor mb-4">Upcoming Campaign</h2>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
          <div className="flex justify-center">
            <div className="container ">
              <div className="p-cat-slider relative">
                <div className="relative w-full h-full">
                  <Slider
                    ref={(slider1) => setMainSlider(slider1)}
                    {...sliderSettings}
                  >
                    {campaign.map((data, i) => (
                      <div key={i} className="">
                        <CampaignCard data={data}></CampaignCard>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
