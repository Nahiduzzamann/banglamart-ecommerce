import { Link } from "react-router-dom";
import SellerShopCart from "../../../components/SellerShopCart";

const BestSellers = () => {
  const data = [
    {
      thumbnail: "https://images.unsplash.com/photo-1590874315261-788881621f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      ratings: 4.8,
      shopName: "Fashion Paradise",
      address: "1234 Main Street, City",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      ratings: 4.6,
      shopName: "Electro Mart",
      address: "5678 Avenue Road, Town",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1605486066632-74ee8fc55b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      ratings: 4.9,
      shopName: "Home Essentials",
      address: "9876 Street Lane, Village",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1534004760608-6f319a7410ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 4.5,
      shopName: "Beauty Haven",
      address: "5432 Garden Street, Suburb",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1517492973030-a02d282206f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 4.7,
      shopName: "Gourmet Delights",
      address: "2468 Culinary Court, Metro",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1567525884234-85d64bb065fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 4.8,
      shopName: "Sports Emporium",
      address: "1357 Stadium Avenue, Urban",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1584209766712-e38802bf7f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 2.6,
      shopName: "Electro Shop",
      address: "369 Electronics Boulevard, City",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1621465558398-d3f87bfaec26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 3.9,
      shopName: "Book Nook",
      address: "9876 Library Lane, Town",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNob3AlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ratings: 3.5,
      shopName: "Pets' Paradise",
      address: "5432 Pet Street, Village",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1518597222911-9c4a76e71615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      ratings: 2.7,
      shopName: "Artistic Creations",
      address: "2468 Art Avenue, Suburb",
    },
  ];
  const seller =  data.slice(0, 6)

  return (
    <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Best sellers</h1>
        </div>
        {data.length > 6 && (
          <Link
            to="all-seller"
            className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm"
          >
            View All Sellers
          </Link>
        )}
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
        {
          seller.map((data,i)=>(<SellerShopCart key={i} data={data} />))
        }
      </div>
    </div>
  );
};

export default BestSellers;
