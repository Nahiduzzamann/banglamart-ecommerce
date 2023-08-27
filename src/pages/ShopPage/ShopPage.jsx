import SellerShopCart from "../../components/SellerShopCart";

const ShopPage = () => {
  return (
    <div className="container mx-auto bg-CardColor lg:mt-4">
      <div className="flex justify-center border-b-[1px] border-b-BorderColor p-4">
        <SellerShopCart></SellerShopCart>
      </div>
      <div className="p-4"><h1 className="text-SubTextColor">Products</h1></div>
    </div>
  );
};

export default ShopPage;
