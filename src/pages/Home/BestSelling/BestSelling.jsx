import { Link } from "react-router-dom";
import ProductShowSlider from "../../../components/ProductShowSlider";

const BestSelling = () => {
  const productData = [
    {
      thumbnail:
        "https://media.istockphoto.com/id/1430997435/photo/set-of-amber-glass-bottles-with-dropper-lid-on-a-3d-wooden-podium-in-the-sunlight-containers.webp?b=1&s=170667a&w=0&k=20&c=7fqscVg7-pY9s-HHtqxmsvApVutdGL8GgprHdkjvHAQ=",
      oldPrice: 200,
      newPrice: 150,
      title: "Product 1",
      percentage: true,
      offer: 25,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: 150,
      newPrice: 120,
      title: "Product 2",
      percentage: true,
      offer: 20,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
      oldPrice: 50,
      newPrice: 40,
      title: "Product 3",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1004&q=80",
      oldPrice: 1200,
      newPrice: 950,
      title: "Product 4",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      oldPrice: 80,
      newPrice: 60,
      title: "Product 5",
      percentage: true,
      offer: 25,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/505677-HL-Is_Ensure_or_Boost_Healthier-1296x728-Header.jpg?w=1155&h=1528",
      oldPrice: 300,
      newPrice: 250,
      title: "Product 6",
      percentage: true,
      offer: 20,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: 40,
      newPrice: 30,
      title: "Product 7",
      percentage: true,
      offer: 25,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      oldPrice: 180,
      newPrice: 150,
      title: "Product 8",
      percentage: true,
      offer: 20,
      deliveryFree: true,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      oldPrice: 70,
      newPrice: 60,
      title: "Product 9",
      percentage: true,
      offer: 15,
      deliveryFree: false,
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      oldPrice: 70,
      newPrice: 60,
      title: "Product 9",
      percentage: true,
      offer: 15,
      deliveryFree: false,
    },
  ];
  return (
    <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
      <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
        <div className="border-b-[3px] border-b-MainColor ">
          <h1 className="">Best Selling</h1>
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

export default BestSelling;
