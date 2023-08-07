import FlashSaleBanner from "../../../components/FlashSaleBanner";
import FlashSale from "../FlashSale/FlashSale";
import TopBannerSection from "../TopBannerSection/TopBannerSection";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <FlashSale></FlashSale>
    </div>
  );
};

export default Home;
