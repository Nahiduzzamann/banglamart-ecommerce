import { Link } from "react-router-dom";
import ProductShowSlider from "../../../components/ProductShowSlider";

const TopProducts = () => {
  const productData = [
    {
      thumbnail: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
      oldPrice: 200,
      newPrice: 150,
      title: "Product 1",
      percentage: true,
      offer: 25,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      oldPrice: 150,
      newPrice: 120,
      title: "Product 2",
      percentage: true,
      offer: 20,
      deliveryFree:true
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1004&q=80",
      oldPrice: 50,
      newPrice: 40,
      title: "Product 3",
      percentage: true,
      offer: 20,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1571689936114-b16146c9570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80",
      oldPrice: 1200,
      newPrice: 950,
      title: "Product 4",
      percentage: true,
      offer: 20,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      oldPrice: 80,
      newPrice: 60,
      title: "Product 5",
      percentage: true,
      offer: 25,
      deliveryFree:true
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1523132797263-747d5d0dbbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      oldPrice: 300,
      newPrice: 250,
      title: "Product 6",
      percentage: true,
      offer: 20,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: 40,
      newPrice: 30,
      title: "Product 7",
      percentage: true,
      offer: 25,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: 180,
      newPrice: 150,
      title: "Product 8",
      percentage: true,
      offer: 20,
      deliveryFree:true
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      oldPrice: 70,
      newPrice: 60,
      title: "Product 9",
      percentage: true,
      offer: 15,
      deliveryFree:false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80",
      oldPrice: 250,
      newPrice: 200,
      title: "Product 10",
      percentage: true,
      offer: 20,
      deliveryFree:true
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80",
      oldPrice: 250,
      newPrice: 200,
      title: "Product 10",
      percentage: true,
      offer: 20,
      deliveryFree:true
    }
  ];
    return (
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Top Products</h1>
            </div>
            {productData.length > 10 && (
          <Link className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm">
            View More
          </Link>
        )}
          </div>
          <div className="pl-5 md:pl-10 pr-5 md:pr-10 pt:3 md:pt-5 pb-3 md:pb-5">
            <ProductShowSlider data={productData}></ProductShowSlider>
          </div>
        </div>
      );
    };

export default TopProducts;
