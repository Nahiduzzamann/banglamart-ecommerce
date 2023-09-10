import FlashSaleBanner from "../../../components/FlashSaleBanner";
import BargainingProducts from "../BargainingProducts/BargainingProducts";
import BestSellers from "../BestSellers/BestSellers";
import BestSelling from "../BestSelling/BestSelling";
import FlashSale from "../FlashSale/FlashSale";
import NewProducts from "../NewProducts/NewProducts";
import TopBannerSection from "../TopBannerSection/TopBannerSection";
import TopProducts from "../TopProducts/TopProducts";
import init from "../../../visitor"
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    fetch()
  },[])
  const fetch=async()=>{
    const data = await init()
    console.log(data);
  }
  return (
    <div>
      <TopBannerSection></TopBannerSection>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="container mx-auto ">
        <FlashSale></FlashSale>
        <NewProducts></NewProducts>
        <BargainingProducts></BargainingProducts>
        <BestSelling></BestSelling>
      </div>
      <FlashSaleBanner></FlashSaleBanner>
      <div className="container mx-auto">
        <TopProducts></TopProducts>
        
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
