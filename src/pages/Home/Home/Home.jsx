import FlashSaleBanner from "../../../components/FlashSaleBanner";
import BestSellers from "../BestSellers/BestSellers";
import BestSelling from "../BestSelling/BestSelling";
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
        <BestSelling></BestSelling>
        <BestSellers/>
      </div>
    </div>
  );
};

export default Home;
