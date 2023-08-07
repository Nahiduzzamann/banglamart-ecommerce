import FlashSaleBanner from "../../../components/FlashSaleBanner";
import FlashSale from "../FlashSale/FlashSale";
import NewProducts from "../NewProducts/NewProducts";
import TopBannerSection from "../TopBannerSection/TopBannerSection";

const Home = () => {
  return (
    <div>
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="container mx-auto">
        <FlashSale></FlashSale>
        <NewProducts></NewProducts>
      </div>
    </div>
  );
};

export default Home;
