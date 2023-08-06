import FlashSaleBanner from "../../../components/FlashSaleBanner";
import PopularCategory from "../NewProducts/NewProducts";
import TopBannerSection from "../TopBannerSection/TopBannerSection";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <PopularCategory />
    </div>
  );
};

export default Home;
