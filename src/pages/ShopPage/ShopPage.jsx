import SellerShopCart from "../../components/SellerShopCart";

const ShopPage = () => {
  const data ={
    thumbnail: "https://images.unsplash.com/photo-1590874315261-788881621f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ratings: 4.8,
    shopName: "Fashion Paradise",
    address: "1234 Main Street, City",
  }
 
  return (
    <div className="container mx-auto bg-CardColor lg:mt-4">
      <div className="flex justify-center border-b-[1px] border-b-BorderColor p-4">
        <SellerShopCart data={data}></SellerShopCart>
      </div>
      <div className="p-4"><h1 className="text-SubTextColor">Products</h1></div>
    </div>
  );
};

export default ShopPage;
