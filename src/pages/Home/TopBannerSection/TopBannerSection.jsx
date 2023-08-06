import AllCategory from "../../../components/AllCategory";
import Banner from "../../../components/Banner";

const TopBannerSection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 pt-[16px]">
        <div className="hidden lg:col-span-1 lg:block ">
          <AllCategory></AllCategory>
        </div>
        <div className="col-span-4 lg:col-span-3 p-1  lg:p-0">
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default TopBannerSection;
