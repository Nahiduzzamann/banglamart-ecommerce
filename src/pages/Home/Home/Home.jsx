import FlashSaleBanner from "../../../components/FlashSaleBanner";
import NewProducts from "../NewProducts/NewProducts";
import TopBannerSection from "../TopBannerSection/TopBannerSection";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <NewProducts></NewProducts>
    </div>
  );
};

export default Home;
