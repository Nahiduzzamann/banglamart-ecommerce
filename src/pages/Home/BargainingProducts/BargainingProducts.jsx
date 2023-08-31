import { Link } from "react-router-dom";
import EmptyContent from "../../../components/EmptyContent";



const BargainingProducts = () => {
//   const productData = [
//     {
//       thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
//       oldPrice: 200,
//       newPrice: 150,
//       title: "Product 1",
//       percentage: true,
//       offer: 25,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
//       oldPrice: 150,
//       newPrice: 120,
//       title: "Product 2",
//       percentage: true,
//       offer: 20,
//       deliveryFree:true
//     },
//     {
//       thumbnail: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Product_photography.jpg",
//       oldPrice: 50,
//       newPrice: 40,
//       title: "Product 3",
//       percentage: true,
//       offer: 20,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://cdn.pixabay.com/photo/2018/08/29/14/47/perfume-3640056_1280.jpg",
//       oldPrice: 1200,
//       newPrice: 950,
//       title: "Product 4",
//       percentage: true,
//       offer: 20,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://monatglobal.com/wp-content/uploads/2021/04/MONAT-Hair-and-Skincare-Products-_-MONAT-Global.jpg",
//       oldPrice: 80,
//       newPrice: 60,
//       title: "Product 5",
//       percentage: true,
//       offer: 25,
//       deliveryFree:true
//     },
//     {
//       thumbnail: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/505677-HL-Is_Ensure_or_Boost_Healthier-1296x728-Header.jpg?w=1155&h=1528",
//       oldPrice: 300,
//       newPrice: 250,
//       title: "Product 6",
//       percentage: true,
//       offer: 20,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://www.oberlo.com/media/1603954764-image059.png?w=1824&fit=max",
//       oldPrice: 40,
//       newPrice: 30,
//       title: "Product 7",
//       percentage: true,
//       offer: 25,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
//       oldPrice: 180,
//       newPrice: 150,
//       title: "Product 8",
//       percentage: true,
//       offer: 20,
//       deliveryFree:true
//     },
//     {
//       thumbnail: "https://1.bp.blogspot.com/-hsLsnlhJIZM/XmuYE4QlwfI/AAAAAAAAJaU/ESQm2jvhGDwtYoWB_tYztc4jahj7VggzwCLcBGAsYHQ/s1600/juta%2Bka%2Bphoto%2B%252817%2529.jpg",
//       oldPrice: 70,
//       newPrice: 60,
//       title: "Product 9",
//       percentage: true,
//       offer: 15,
//       deliveryFree:false
//     },
//     {
//       thumbnail: "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?cs=srgb&dl=pexels-alex-azabache-3907507.jpg&fm=jpg",
//       oldPrice: 250,
//       newPrice: 200,
//       title: "Product 10",
//       percentage: true,
//       offer: 20,
//       deliveryFree:true
//     }
//   ];
  
    return (
        <div className=" mt-4 lg:mt-8 m-1 lg:m-0 bg-CardColor rounded-lg">
          <div className="flex border-b-[1px] border-b-BorderColor pl-5 md:pl-10 pb-2 pt-2 justify-between items-center">
            <div className="border-b-[3px] border-b-MainColor ">
              <h1 className="">Bargaining Products</h1>
            </div>
            <Link 
            to='/bargaining-products'
            className="mr-5 md:mr-10 pb-1 pt-1 pl-2 pr-2 md:pl-3 md:pr-3 bg-MainColor rounded-full text-CardColor shadow-lg hover:bg-MainColorHover text-sm">
              View More
            </Link>
          </div>
          <div className="">
            <EmptyContent text='Currently no bargaining products available'></EmptyContent>
          </div>
        </div>
      );
    };

export default BargainingProducts;
