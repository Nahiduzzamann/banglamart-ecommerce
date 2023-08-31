import FlashSaleBanner from "../../../components/FlashSaleBanner";
import BargainingProducts from "../BargainingProducts/BargainingProducts";
import BestSellers from "../BestSellers/BestSellers";
import BestSelling from "../BestSelling/BestSelling";
import FlashSale from "../FlashSale/FlashSale";
import NewProducts from "../NewProducts/NewProducts";
import TopBannerSection from "../TopBannerSection/TopBannerSection";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="container mx-auto ">
        <FlashSale></FlashSale>
        <NewProducts></NewProducts>
        <BestSelling></BestSelling>
      </div>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="container mx-auto">
        <TopProducts></TopProducts>
        <BargainingProducts></BargainingProducts>
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
