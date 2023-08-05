import AllCategory from "../AllCategory";
import Banner from "../Banner";

const TopBannerSection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 pt-[16px]">
        <div className="col-span-1">
          <AllCategory></AllCategory>
        </div>
        <div className="col-span-3">
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default TopBannerSection;
